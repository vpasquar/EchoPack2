var express = require("express");

var router = express.Router();


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': process.env.WATSON_USER,
    'password': process.env.WATSON_PASS,
    'version_date': '2017-02-27'
});


router.get("/api/box/sentiment", function(req, res) {
    var parameters = {
        'url': 'echopack2.herokuapp.com/api/',
        'features': {
            'sentiment': {
                'targets': [
                    
                ]
            }
        }
    };
})



var parameters = {
    'url': 'www.wsj.com/news/markets',
    'features': {
        'sentiment': {
            'targets': [
                'stocks'
            ]
        }
    }
};

natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
        console.log('error:', err);
    else
        console.log(JSON.stringify(response, null, 2));
});


module.exports = router;