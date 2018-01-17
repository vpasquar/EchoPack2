var express = require("express");
const env = require('dotenv/config')

var router = express.Router();


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': process.env.WATSON_USER,
    'password': process.env.WATSON_PASS,
    'version_date': '2017-02-27'
});


router.post("/api/sentiment", function(req, res) {
    console.log(req.body.content);

    var parameters = {
        'text': req.body.content,
        'features': {
            'entities': {
                'sentiment': true,
                'limit': 5
            },
            'keywords': {
                'emotion': true,
                'sentiment': true,
                'limit': 5
            }
        }
    }


    natural_language_understanding.analyze(parameters, function(err, response) {
        if (err) {

            console.log('error:', err);
        } else {
            let scores = [];

            for (v in response.keywords) {
                scores.push(response.keywords[v].sentiment.score);
            }
            if (scores.length > 0) {
                const reducer = (acc, i) => acc + i;
                const tSent = scores.reduce(reducer);

                const sentiment = {
                    score: tSent
                }
                // console.log(JSON.stringify(response, null, 2));
                res.json(sentiment);
            }else{
                const sentiment = {
                    score: 0
                }
                res.json(sentiment);
            }

        }
    });
})



module.exports = router;