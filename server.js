// =============== DEPENDENCIES ===============//
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');


// =============== CONTROLLERS ===============//
const communityController = require('./controllers/community_controller.js')
const postsController = require('./controllers/posts_controller.js')
const userController = require('./controllers/users_controller.js')



// =============== CONFIGURATION ===============//
const app = express();
const db = mongoose.connection;
require('dotenv').config()


// =============== PORT ===============//
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;


// =============== DATEBASE ===============//
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);


// =============== MIDDLEWARE ===============//
app.use('/users', userController);
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use('/community', communityController);
app.use('/posts', postsController);



// =============== ROUTES ===============//
//localhost:3000
app.get('/' , (req, res) => {
  // res.send('Hello World!');
  res.redirect('/community')
});


// =============== ERROR / SUCCESS ===============//
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// =============== LISTENER ===============//
app.listen(PORT, () => console.log( 'Listening on port:', PORT));







//
