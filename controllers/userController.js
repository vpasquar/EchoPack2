// Grabbing our models

var db = require("../models"); // May need to specify .js file
var passport = require("../config/passport"); // configured passport 

// Routes
// =============================================================

module.exports = function(app) {


    // The following is the post route for authentication. 

    app.post('/api/login', passport.authenticate('local'), function(req, res) {

        console.log("req.user at api/login" + req.user);
        res.json(req.user);

    });


    app.get("/api/logincheck", function(req, res) {

        if (req.user) {
            console.log("login check server side" + req.user);
            let userObj = {
                user: req.user
            }
            res.send(userObj);
        }
    })

    app.get("/api/logout", function(req, res) {
        req.logout();
        res.send("user logged out")
    })
    //
    // POST route for saving a new User
    app.post("/api/createUser", function(req, res) {

        console.log("User Data:");
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. (req.body)
        db.User.create({
                firstName: req.body.fName,
                lastName: req.body.lName,
                userName: req.body.username,
                email: req.body.eMail,
                password: req.body.password

            }).then(function(dbUser) {
                // We have access to the new todo as an argument inside of the callback function
                res.json(dbUser);
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });



    // DELETE route for deleting User
    app.delete("/api/Users/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // PUT route for updating User
    app.put("/api/Users", function(req, res) {
        db.User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password
            }, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbUser) {
                res.json(dbUser);
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    app.get("/api/Users/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            console.log(dbUser);
            res.send(dbUser);
        }).catch(err => res.send(err));
    })


};