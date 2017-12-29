var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

app.post("/api/post/f", function(req, res) {
    db.Comment.create({
        PostId: req.body.fID,
        UserId: 1,
        authorUserId: 1,
        content: req.body.comment,
        score: 0

    }).then(function(dbPost) {
        res.json(dbPost);
    });
});

};