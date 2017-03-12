var Client = require('node-rest-client').Client;
//REST server properties
var host_url = "http://sapient3-evaluation-dw.demandware.net";
var api_path = "/s/SiteGenesis/dw/shop/v17_2/";
var server_url = host_url+api_path;
var client_id = "5a40714c-52c3-44df-a00d-9d3bb2dc8ea8";
var max_suggestion = 2;

var getURL = function(method){
    return server_url+method;
};

var client = new Client();

client.registerMethod("products",getURL('products')+"/${id}?all_images=true&expand=images,prices&client_id="+client_id, "GET");
client.registerMethod("productimage",getURL('products')+"/${id}/images?all_images=true&client_id="+client_id, "GET");
client.registerMethod("searchsuggestion",getURL('search_suggestion')+"?q=${arg1}&count=${arg2}&client_id="+client_id, "GET");
client.registerMethod("getCategories",getURL('categories')+"/${id}?level=${2}&client_id="+client_id, "GET");
client.registerMethod("searchproducts",getURL('product_search')+"?q=${arg1}&refine1=cgid=${arg2}&count=100&expand=images,prices&client_id="+client_id, "GET");

module.exports = {
getProduct : function(product_id, callbackmethod)
{
  var args = {
    path: { "id": product_id } // path substitution var
  };
  client.methods.products(args,callbackmethod);
},

getSuggestion : function(query,callbackmethod)
{
  var args = {
    path: { "arg1" : query, "arg2" : max_suggestion }
  };
  client.methods.searchsuggestion(args, callbackmethod);

  //http://hostname:port/dw/shop/v17_2/search_suggestion?q={String}&count={Integer}&currency={String}&locale={String}
},
getProductImages : function(product_id,callbackmethod)
{
  var args = {
    path: { "id": product_id } // path substitution var
  };
  client.methods.productimage(args,callbackmethod);
  //http://hostname:port/dw/shop/v17_2/search_suggestion?q={String}&count={Integer}&currency={String}&locale={String}
},
searchProducts : function(callbackmethod,query,refine)
{
  var args = {
    path: { "arg1" : query, "arg2" : ((refine) ? refine : 'root')}
  };
  console.log(JSON.stringify(args));
  client.methods.searchproducts(args, callbackmethod);
},
getCategories : function(callbackmethod,cgid)
{
  var args = {
    path: { "id" : ((cgid) ? cgid : 'root'), "arg1" : 1}
  };
  client.methods.getCategories(args, callbackmethod);
}
  //http://sapient3-evaluation-dw.demandware.net/s/SiteGenesis/dw/shop/v17_2/product_search?q=shirt&client_id=5a40714c-52c3-44df-a00d-9d3bb2dc8ea8&expand=images,prices&refine_1=cgid=mens},
};
