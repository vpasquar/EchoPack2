// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");
// const sassMiddleware = require('node-sass-middleware')
const path = require('path');
const passport = require('./config/passport'); // our local passport strategy
const app = express();

// Vin added this... not sure if we need ?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());


const home = require('./controllers/homeController.js');
const box = require('./controllers/boxController.js');
const post = require('./controllers/postController.js');
const user = require('./controllers/userController.js');
const comment = require('./controllers/commentController.js');
//const comment

const env = require('dotenv/config')
const db = require("./models");

const PORT = process.env.PORT || 3001;
const server_host = process.env.YOUR_HOST || '0.0.0.0';


app.use(express.static("client/build"));

//Use Controllers
app.use('/', home);
// home(app);
box(app);
post(app);
user(app);
comment(app);


db.sequelize.sync({force:false}).then(function(){
	app.listen(PORT, function(){
		console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	})
})