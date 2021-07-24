const express = require('express')
const Community = require('../models/community.js')
const community = express.Router()


// =========== NEW ROUTE ===========//


// =========== EDIT ROUTE ===========//


// =========== DELETE ROUTE ===========//


// =========== SHOW ROUTE ===========//


// =========== UPDATE ROUTE ===========//


// =========== CREATE ROUTE ===========//


// =========== INDEX ROUTE ===========//
community.get('/', (req, res) => {
    res.render('../views/community/index.ejs')
})

// =========== SEED ROUTE ===========//



module.exports = community;
