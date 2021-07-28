const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// =========== NEW ROUTE ===========//
sessions.get('/new', (req, res) => {
    res.render(
        'sessions/new.ejs',
        {
            currentUser: req.session.currentUser
        }
    )
})


// =========== CREATE ROUTE ===========//
// submit buton for log in
sessions.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        // if error
        if (err) {
            console.log(err)
            res.send('Oops, there was a problem!')
        } else if (!foundUser) {
            res.send('<a href="/">Sorry, no user found</a>')
        } else {
            // username found and now checking password
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.redirect('/posts')
            } else {
                // if passwords do not match
                res.send('<a href="/">Password does not match</a>')
            }
        }
    })
})

// =========== DELETE ROUTE ===========//
sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/community')
    })
})

module.exports = sessions;

//
