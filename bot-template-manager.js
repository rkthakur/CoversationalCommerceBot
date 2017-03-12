//export module
module.exports = {
  //prepare product view to send. Refer to https://developers.facebook.com/docs/messenger-platform/send-api-reference/list-template
  getTmplProduct: function(data) {
      var tmpl = {
					"title": data.title,
					"image_url": data.image_url,
					"subtitle": data.subtitle,
					"default_action": {
						"type": "web_url",
						"url": data.url,
						"messenger_extensions": true,
						"webview_height_ratio": "tall",
						"fallback_url": "https://www.facebook.com/ROMImate-377075916018627"
					},
					"buttons": [{
            "type": "postback",
            "title": data.buttons[0].title+" "+data.curreny+data.price,
            "payload": data.buttons[0].payload,
						"webview_height_ratio": "tall"
					}]				
				};
      //console.log(JSON.stringify(data));
      return tmpl;
  },

//Prepare plain product list to show
getTmplPlainProductList : function(list){
  //console.log(JSON.stringify(list));
  var elements = [];
  for (var i = 0; i < list.options.length;i++ )
  {
      elements.push(this.getTmplProduct(list.options[i]));
  }
  var tmpl = {
      "attachment": {
          "type": "template",
          "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": elements,
            "buttons": [{
              "title": "View More",
              "type": "postback",
              "payload": "payload"
            }]
          }
      }
  };
  console.log(JSON.stringify(tmpl));
  return tmpl;
},
    //prepare normal text to send
    getTmplText: function(data) {
        var tmpl;

        tmpl = {
            text: data.response
        };
        return tmpl;
    },
    //prepare option list to send
    getTmplOptionList: function(data) {
        var tmpl,
            list = [];

        for (var i = 0; i < data.options.length; i++) {
            var _obj = {
                "type": "postback",
                "title": data.options[i].name,
                "payload": data.options[i].id
            };

            list.push(_obj);
        }

        tmpl = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": data.response,
                    "buttons": list
                }
            }
        };
        return tmpl;
    },
    //prepare slider/carousel to send
    getTmplCarouselList: function(list) {
        var tmpl;
        tmpl = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": list.options,
                }
            }
        };

        return tmpl;
    },
    //prepare generic/receipt template to send
    getTmplReceipt: function(data) {
        var tmpl;

        tmpl = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": data.details
                }
            }
        };

        return tmpl;
    },
    getTmplQuickReply: function(data) {
        var tmpl,
            list = [];

        for (var i = 0; i < data.options.length; i++) {
            var _obj = {
                "content_type": "text",
                "title": data.options[i].name,
                "payload": data.options[i].id
            };

            list.push(_obj);
        }

        tmpl = {
            "text": data.response,
            "quick_replies": list
        };
        return tmpl;
    }
}
