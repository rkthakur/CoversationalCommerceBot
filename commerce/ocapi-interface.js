var ocapi = require('./OCAPI');
var service = require('../bot-service');
var CONFIG = require('../bot-config');
var _ = require('underscore');

module.exports = {
	suggestions : function(data, response) {
		// parsed response body as js object
		console.log(JSON.stringify(data));
		// raw response
		//console.log(response);
	},
	product : function(data, response) {
		// parsed response body as js object
		//console.log(data);
		if(data)
			{
			var product = {
				    "tType": "product",
					"details": [{
						"title": data.name,
						"image_url": data.image_groups[0].images[0].link,
						"subtitle": data.short_description,
						"default_action": {
							"type": "web_url",
							"url": "https://www.facebook.com/ROMImate-377075916018627/",
							"messenger_extensions": true,
							"webview_height_ratio": "tall",
							"fallback_url": "https://www.facebook.com/ROMImate-377075916018627/"
						},
						"buttons": [{
					        "type":"element_share"
					      }/*,{
							"type": "web_url",
							"url": "https://www.facebook.com/ROMImate-377075916018627/",
							"title": "View Website"
						}*/, {
							"type": "postback",
							"title": "Buy $"+data.price,
							"payload": "DEVELOPER_DEFINED_PAYLOAD"
						},
						{
					          "type":"phone_number",
					          "title":"Call Representative",
					          "payload":"+919650352209"
					    }]
					}]
			};
		//console.log(JSON.stringify(products));
			service.sendMessageCC(this.key, this.userObj, product,this.key);
			} else {
				service.sendPlainMessage(this.userObj.userId, CONFIG, CONFIG.defaultQueryMsg);
			}
		
		//return plist;
		// raw response

	},
	categoties : function(data, response) {
		var categorylist = [];
		for (var i = 0; i < 3; i++) { //Show only 3 products
			var category = {
						"id": "search_"+data.categories[i].id,
						"name": data.categories[i].name
					};
			categorylist.push(category);
		}

		var optionlist = {
				"response": "Please select an option to start with.",
				"key": "select_menu",
				"tType": "optionList",
				"options": categorylist
		};
		//console.log(JSON.stringify(products));
		service.sendMessageCC(this.key, this.userObj, optionlist,this.answer);
		//return plist;
		// raw response
		
		// parsed response body as js object
	},
	productList : function(data, response) {
		// parsed response body as js object
		//console.log(data);
		var products = [];
		if(data.hits)
			{
		for (var ii = 0; ii < 3; ii++) {
			var i = Math.floor(Math.random() * data.hits.length); //Randomly select product to show in list
			var product = {
				"title" : data.hits[i].product_name,
				"image_url" : data.hits[i].image.link,
				"subtitle" : "Our paisley shirts are always a best seller. This paisley shirt is both fashionable and sophisticated.",
				"curreny" : "$",
				"price" : data.hits[i].price,
				"url" : "https://www.facebook.com/ROMImate-377075916018627",
				"buttons" : [ {
					"type" : "postback",
					"payload" : "product_" + data.hits[i].product_id,
					"title" : "Show Details"
				} ]
			};
			products.push(product);
		}

		var plist = {
			"response" : "Which shirt would you like to buy? Please select.",
			"tType" : "productList",
			"key" : "select_shirt",
			"options" : products
		};
		//console.log(JSON.stringify(products));
		service.sendMessageCC(this.key, this.userObj, plist,this.answer);
			} else {
				service.sendPlainMessage(this.userObj.userId, CONFIG, CONFIG.defaultQueryMsg);
			}
		
		//return plist;
		// raw response

	},
	 sendNextQuestion: function(responseList, userObj, mappedkey, key,answer,witKeyentities) {

	        nextQuestion = _.findWhere(responseList, {
	            key: mappedkey
	        });
	        if(mappedkey == 'select_menu')
	        	{
	        		ocapi.getCategories(this.categoties.bind({'key': responseList, 'userObj': userObj, 'nextQuestion': key ,'answer': answer}));
	        	}
	        else
	        	{
	        		var svalue = witKeyentities.search_query[0].value;
	        		ocapi.searchProducts(this.productList.bind({'key': responseList, 'userObj': userObj, 'nextQuestion': key ,'answer': answer}),svalue,'root');
	        	}
	        	        //service.sendMessage(key, userObj, CONFIG, nextQuestion,answer);
	        userObj.lastQuestionKey = key;
	 },
	 showMenu:function(key,userObj,cgid) {
			ocapi.getCategories(this.categoties.bind({'key': key, 'userObj': userObj, 'key': key}),cgid);
	 },
	 showProductDetail: function(key,product_id,userObj) {
	        		ocapi.getProduct(product_id,this.product.bind({"key": key, "userObj":userObj}));
	        		userObj.lastQuestionKey = key;
	 },
	 searchProduct: function(key,searchterm,userObj) {
		ocapi.searchProducts(this.productList.bind({'key': key, 'userObj': userObj}),searchterm,'root');
		userObj.lastQuestionKey = key;
}
	 
//ocapi.getProduct('750518699592',products);
//ocapi.getSuggestion("men",suggestions);
//ocapi.getProductImages('750518699592',products);
//ocapi.searchProducts(productList,"shirt","mens");
//ocapi.getCategories(categoties,"womens");
//http://sapient3-evaluation-dw.demandware.net/s/SiteGenesis/dw/shop/v16_1/products/008884304023?client_id=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
};