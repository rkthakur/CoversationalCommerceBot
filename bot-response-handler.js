var service = require('./bot-service');
var _ = require('underscore');
var CONFIG = require('./bot-config');
var ocapi = require('./commerce/ocapi-interface');
var WIT = require('wit-js');
var client = new WIT.Client({
    apiToken: CONFIG.witToken
});
//var autoReplyKeys = ['comments', 'no_of_people', 'day_and_time'];

module.exports = {
    handleRequest: function(event, userObj, responseList) {
        var _this = this;
        // handle response if normal message received
        if (event.message) {
            /** *** MESSAGE ATTACHMENT EVENT *** */
            if (event.message.text) 
            {
                // get message
                var text = event.message.text;
                    // Send message to WIT
                    client.message(text, {})
                        .then(function(witKey) {
                            // Get response
                            var _key = witKey.entities.intent ? witKey.entities.intent[0].value : '',
                                intentConfidence = witKey.entities.intent ? witKey.entities.intent[0].confidence : 0;
                                console.log(JSON.stringify(witKey));

                             // Search Query                               
                                
                            if (witKey.entities && intentConfidence > 0.5) {

                            	// ask next question
                               

                                if (CONFIG.keyMapped[_key] === "welcome_greeting") {
                                	 _this.sendNextQuestion(responseList, userObj, CONFIG.keyMapped[_key], _key,text);
                                	ocapi.showMenu('select_menu',userObj,'root');
                                	
                                }else if (witKey.entities && witKey.entities.search_query[0].confidence > 0.5) {
                                	ocapi.searchProduct('search_product',witKey.entities.search_query[0].value,userObj)
                                }
                                
                            } else {
                                // send default messsage
                                service.sendPlainMessage(userObj.userId, CONFIG, CONFIG.defaultQueryMsg);
                            }
                        })
                        .catch(function(err) {
                            console.log("WIT reponse fails", err);
                        });
                // }
            }
        }
        // Handle postbask reponse
        else if (event.postback) {

            var nextQuestion,
                textPayload = event.postback.payload;
            // console.log(JSON.stringify(event));
            // set last selected question key
            userObj.lastQuestionKey = textPayload;
            
            // Handle show product details postback
            var playloadtext = textPayload.split("_");
            
            if (playloadtext[0] === "product"){
            	ocapi.showProductDetail(textPayload,playloadtext[1],userObj)
            }else if(playloadtext[0] === "search")
            {
            	ocapi.searchProduct(textPayload,playloadtext[1],userObj)
            }
            // show default menu again
            else if (userObj.lastQuestionKey === "select_menu") {
                setTimeout(function() {
                    //_this.sendNextQuestion(responseList, userObj, CONFIG.keyMapped['select_menu'], 'select_menu',textPayload);
                	ocapi.showMenu('select_menu',userObj,'root');
                }, 1000);
            }
        }
    },
    // send next question to user as per questions mapping
    sendNextQuestion: function(responseList, userObj, mappedkey, key,answer) {

        nextQuestion = _.findWhere(responseList, {
            key: mappedkey
        });
        service.sendMessage(key, userObj, CONFIG, nextQuestion,answer);
        userObj.lastQuestionKey = key;
    }
};
