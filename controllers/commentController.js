var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {



app.get("/api/comments/:postId", function(req,res) {
    let query = {};
    if (req.params.postId) {
    	query.postId = req.params.postId
    }

    db.Comment.findAll({
        where: query,
        include:[db.Post]
       
    }).then(function(dbComment) {
      let commentList = {
          comments:dbComment,
      }
        res.send(commentList);
    })
    .catch(function(err) {
    	res.json(err);
    });
});  


//create a comment
app.post("/api/saveComment/", function(req, res) {
    console.log(req.body.sentiment.score);
    db.Comment.create({
        PostId: req.body.postId,
        UserId: req.body.UserId,
        userName: req.body.userName,
        authorUserId: 1,
        content: req.body.content,
        score: 0,
        sentimentScore: req.body.sentiment.score

    }).then(function(dbPost) {
        res.json(dbPost);
    });
});



};