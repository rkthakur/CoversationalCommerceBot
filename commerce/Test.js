var ocapi = require('./OCAPI');
var suggestions = function (data, response) {
      // parsed response body as js object
      console.log(JSON.stringify(data));
      // raw response
      //console.log(response);
};
var product = function (data, response) {
    // parsed response body as js object
    console.log(JSON.stringify(data));
    // raw response
    //console.log(response);
};
var categoties = function (data, response) {
    // parsed response body as js object
    console.log(JSON.stringify(data));
};

var productList = function (data, response) {
      // parsed response body as js object
      console.log(data);
      var products = [];
      for (var i=0; i < data.hits.length; i++)
      {
        var product = {
          "title": data.hits[i].product_name,
          "image_url": data.hits[i].image.link,
          "subtitle": "Our paisley shirts are always a best seller. This paisley shirt is both fashionable and sophisticated.",
          "curreny": "$",
          "price":data.hits[i].price,
          "url": "https://www.facebook.com/ROMImate-377075916018627",
          "buttons": [{
            "type": "postback",
            "payload": "product_"+i,
            "title": "Buy"
          }]
        };
        products.push(product);
      }

      var plist={
  			"response": "Which shirt would you like to buy? Please select.",
  			"tType": "productList",
  			"key": "select_shirt",
  			"options": products
      };
      //console.log(JSON.stringify(products));
      return plist;
      // raw response

};
ocapi.getProduct('750518699592',product);
//ocapi.getSuggestion("men",suggestions);
//ocapi.getProductImages('750518699592',products);
//ocapi.searchProducts(productList,"shirt","mens");
//ocapi.getCategories(categoties);

 //http://sapient3-evaluation-dw.demandware.net/s/SiteGenesis/dw/shop/v16_1/products/008884304023?client_id=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
