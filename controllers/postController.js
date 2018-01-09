// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
// GET route for getting all of the posts
app.get("/api/posts/:boxId", function(req, res) {
    var query = {};
    if (req.params.boxId) {
        query.BoxId = req.params.boxId;
    } 
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Box
    db.Post.findAll({
            where: query,
            include: [db.Box]
        }).then(function(dbPost) {

            let postList = {
                posts:dbPost
            }
            res.send(postList);
        })
        .catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
});




// POST route for saving a new post
app.post("/api/posts/", function(req, res) {
    db.Post.create({
        BoxId: req.body.BoxID,
        UserId: 1,
        title: req.body.title,
        content: req.body.content
    }).then(function(dbPost) {
        res.json(dbPost);
    });
});

// // DELETE route for deleting posts
// app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(function(dbPost) {
//         res.json(dbPost);
//     });
// });

// // PUT route for updating posts
// app.put("/api/posts", function(req, res) {
//     db.Post.update({
//             title: req.body.title,
//             content: req.body.content
//         }, {
//             where: {
//                 id: req.body.id
//             }
//         }).then(function(dbPost) {
//             res.json(dbPost);
//         })
//         .catch(function(err) {
//             // Whenever a validation or flag fails, an error is thrown
//             // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//             res.json(err);
//         });
// });
};