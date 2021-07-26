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
community.get('/setup/seed', (req, res) => {
    Community.deleteMany({}, () => {})
    Community.create(
        [
            {
                name: 'Talia Daniel',
                dateOfBirth: {
                    month: 'February',
                    day: 12,
                    year: 2002,
                    },
                gender: 'female',
                pronouns: 'she/her',
                location: {
                    state: 'Ohio',
                    zip: 45768
                    },
                points: 0,
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
                posts: {
                    date: 'May 16, 2021',
                    entry:'',
                    feeling: 'Good',
                    img: "../public/imgs/biking.jpg"
                }
            },
            {
                name: 'Josh Lawrence',
                dateOfBirth: {
                    month: 'September',
                    day: 20,
                    year: 1997,
                    },
                gender: 'Male',
                pronouns: 'He/Him',
                location: {
                    state: 'New York',
                    zip: 11226
                    },
                points: 0,
                img: "../public/imgs/profile_m2.jpg",
                posts: {
                    date: 'March 23, 2021',
                    entry: 'Just went out for a well needed run with amazing weather! Keep up the great work everyone!',
                    feeling: 'Great',
                    img: "../public/imgs/running_m2.jpg"
                }
            }
        ],
        (error, data) => {
            res.redirect('/community')
        }
    )
})


module.exports = community;
