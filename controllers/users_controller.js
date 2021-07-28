const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/users.js')
const users = express.Router()

users.get('/new', (req, res) => {
    res.render('users/new.ejs')
})

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        console.log('user is created', createdUser);
        res.redirect('/feed')
    })
})

module.exports = users;
