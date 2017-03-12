var CONFIG = {
    //Facebook API token
    accessToken: "EAAYuL2XKYZCsBAOLJRZA80ZBINC8eGy8KpKk3ttFODZAxVb8h9iInaRLxh26SwQeg3ZA0rzeIoHkvdawPaf7RHJIUCZCGU1od3rqZBwDmRYDuoDSKBT7R1DQQvzHqbSm1ZClZA9V2I7A3XKNC8rspDy95MTYf72agZBWEDUw559rLz7xxYojzZCYBHj",

    //WIT NPL engine API token
    witToken: "R4LG3HHTAMOWHOMI3IBQ6JDOTRETMC5S",

    port: 8080,
    ssl: {
        key: "",
        cert: "",
        ca: ""
    },

    isFirebaseDB : false,

    //Application token to verify with Facebook API
    verifyToken: "botdemo",

    listenPort: 443,

    //Set default messages
    defaultAuthMsg: "User not authorized, kindly try again with different credentials.",
    defaultQueryMsg: "Will be glad to help you. Kindly write to us rthakur@sapient.com",

    //firebase API token
    firebase : {
      apiKey: "AIzaSyA9Pae0uSBWVArq1MO2na-roRdcDYtH_1A",
authDomain: "botdemo-e5f26.firebaseapp.com",
databaseURL: "https://botdemo-e5f26.firebaseio.com",
storageBucket: "botdemo-e5f26.appspot.com",
messagingSenderId: "727686749896",
        serviceAccount : {
          "type": "service_account",
  "project_id": "botdemo-e5f26",
  "private_key_id": "b29eb8d870bfa499735e968d654d2d8baec2aebd",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDtSfQCy2EPvh5L\niGCFR35NwL8lTwzFgeK7rqwZQ3QByxvdXiIjsiTwmfRHDFP0pbLbKPnDVFdE4oiE\nLv8EQhgYUScWQf4vGvtrncIL11cFKOAPZL1UtAe8GskZmYvbUxiTd1Sf+XcvLUay\nLDIyC3hRobNMutLqMCCA/pnNC7OWt4gTabvF7mhJvHvanBJ+MOk0at+m6VWZRtKh\n7/vp5jfX3D9dcAK7iIFsdU9R0X67jHuuKhOG+G8NWQ+VnxtQ6DiQHrsZ6uzJ2LLB\nYjhMT+ewn/fxumgUwTLpTuhGO2H2ViSJEVavuc0Tru/Lsv7klpaiialT1CTUCSpL\nn/SmYYSFAgMBAAECggEBALv/Mn8gSRci5nerZeVSXkQV6JsThSfaHxvZaOpfIcLl\n+36oPN4RHuks4HeF0eJrgUfXsAJMiRO/cq9fWJY0E0j4ysH8qPkDJJz/kSS2iHBD\nETnA86vvMo2anydUGpU6wabcDUTtbbsH4RH6qA40PjBWr2qkPcRjOu1YSdxFYBSQ\nb3D72u+nM0+QvscMupVT3QFqFY6beOQtFphS3fyjCBdHX4yBERRitvD5GGgNhMkS\nfaq6lT7odsSLjG0Ju1/HkyMRA51lJBMukw9enJkJlOEBKHrSawVYUkRZJJjHZIFz\nsDERY4TpwJifoV1/Xqk7zmfVvxMRs4HSvEhnjdCRJkUCgYEA+/D1G1lHkWKb6hwx\nHbVna1a4QsZsbcSziaksV/ACMmUSSuI5QQ+WkGMXWUs+xwedpgiAZ3HjSK8HHiS2\n6TSJO0nF46YacstcbWsE4GDw1EnGUB4GI4Py1hgZQwMwrjpfn+/QYdgK6u09nf7B\nxeam5nJOl79asYXlWGbg3ktDe+MCgYEA8RyRNqA5CQLsppco3cTgBZfPJSEhRGKZ\nkokuvJYKZVApGi871j0s4K8fCGK7ayzxWa+9PvS0zVIitJASNx9b7tSfSJKuAskr\niOOEnTKoqX6OJ4EOh26+0GbVqomrZX/wiMQZzSgKwit9gKc+9ET0wOYzSz3dE2HU\npbn9snYAuncCgYAZYD6/33E28pCztt03mdLt29E5YJUBRWO0BOcjgFgoTUfXZQvR\nQsmuh1yNsOeE0n6Nf6O3R6BV7NMxtQ77VEBSSW72K//T+im4F6RpGTqIl1mzLiL+\nJscpy0mYF1Uq51REXrpFcKZA3V5scIGB9mZvJapG3I48/TiJe+tAWKJWcwKBgQDB\nvojZckoieZ0cCF8oRSkWlXQ4i7SltO1emKlblN1pp84/YjEc6C+FpHK1VFDxwD14\nKgVR72TRj+yfVx2r+aDv+x67PFJjnq9C4kAP6UMqX61vBP9dyJm/8MJEtTdq6jGo\nVJu/BSwP9s50cO/fbQGXd+ND1MQu7O/o89lua/AN5QKBgQC0wdGU4fQFmhCq0oqb\nmW4nEYkr+PzjzClqBENBi60nKXIhMJ+il8ymagJglrxR4O/knGliItYKvqk+2IyX\nhqyNWMQwiQokBgItVB16C34eC5phx2Mg2gL84rmLGON5FWJGL0cEPT4OfD7xAxUo\nGwygaKh0N5yYSnmm/1z6O64xaw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xc5k1@botdemo-e5f26.iam.gserviceaccount.com",
  "client_id": "111757431551897324550",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xc5k1%40botdemo-e5f26.iam.gserviceaccount.com"
}
    },

    //chatbot key mapping (Mapping between user response and next questions to ask from end user)
    keyMapped: {
        "show_shirts": "select_shirt",
        "welcome_greeting": "welcome_greeting",
        "select_menu": "select_menu",
        "see_menu": "see_menu",
        "make_reservation": "select_restaurant",
        "restaurant_1": "no_of_people",
        "restaurant_2": "no_of_people",
        "restaurant_3": "no_of_people",
        "no_of_people": "no_of_people",
        "day_and_time": "day_and_time",
        "reservation_length": "reservation_length",

        "30_min": "special_request",
        "60_min": "special_request",
        "90_min": "special_request",
        "general_dining": "confirmation",
        "romatic_dinner": "confirmation",
        "private_party": "confirmation",
        "confirm_reservation": "receipt",
        "cancel_reservation": "cancel_greeting",
        "receipt": "feedback",
        "one_star": "comments",

        "three_star": "comments",
        "five_star": "comments",
        "comments": "thanks_greeting",
        "order_takeout": "meal_options",
        "by_favourite": "select_restaurant_cousine",
        "by_cousine": "cousine_type",
        "pizza": "select_restaurant_cousine",
        "burger": "select_restaurant_cousine",
        "sub": "select_restaurant_cousine",
        "restaurant_cousine_1": "pre_order",

        "restaurant_cousine_2": "pre_order",
        "restaurant_cousine_3": "pre_order",
        "restaurant_cousine_4": "pre_order",
        "restaurant_cousine_5": "pre_order",
        "select_restaurant_cousine": "pre_order",
        "my_favourite_order": "select_meal",
        "my_custom_order": "select_meal",
        "meal_1": "other_items",
        "meal_2": "other_items",
        "meal_3": "other_items",
        "meal_4": "other_items",

        "meal_5": "other_items",
        "meal_6": "other_items",
        "drinks": "drinks",
        "fries": "fries",
        "no_thanks": "confirmation_order",
        "beer": "confirmation_order",
        "wine": "confirmation_order",
        "soft_drink": "confirmation_order",
        "thick_cut": "confirmation_order",
        "house_cut": "confirmation_order",
        "twice_fried": "confirmation_order",
        "confirm_order": "receipt_order",
        "cancel_order": "cancel_greeting",
        "estimation": "feedback",
    }
};
module.exports = CONFIG;
