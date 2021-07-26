const express = require('express')
const Community = require('../models/community.js')
const community = express.Router()


// =========== NEW ROUTE ===========//
community.get('/new', (req, res) => {
    res.render('community/new.ejs')
    // res.send('test')
})

// =========== EDIT ROUTE ===========//


// =========== DELETE ROUTE ===========//
community.delete('/:id', (req, res) => {
    Community.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/community')
    })
})

// =========== SHOW ROUTE ===========//
community.get('/:id', (req, res) => {
    Community.findById(req.params.id, (error, foundMember) => {
        res.render(
            'community/show.ejs',
            {
                member: foundMember
            }
        )
    })
})

// =========== UPDATE ROUTE ===========//


// =========== CREATE ROUTE ===========//
community.post('/', (req, res) => {
    Community.create(req.body, (error, createdMember) => {
        res.redirect('/community')
    })
})

// =========== INDEX ROUTE ===========//
community.get('/', (req, res) => {
    Community.find({}, (error, allMembers) => {
        res.render(
            'community/index.ejs',
            {
                members: allMembers
            }
        )
    })
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
                gender: 'Female',
                pronouns: 'She/Her',
                location: {
                    state: 'Ohio',
                    zip: 45768
                    },
                points: 0,
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
                posts: [
                    {
                        date: 'May 16, 2021',
                        entry: "Best part of my day! #BikeAdventures",
                        feeling: 'Good',
                        img: "https://images.unsplash.com/photo-1598132669477-d2d3e1a2501f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    },
                    {
                        date: 'May 18, 2021',
                        entry: 'Keep up the great work everyone!',
                        feeling: 'Great',
                        img: "https://images.unsplash.com/photo-1598132669477-d2d3e1a2501f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    }
                ]
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
                posts: [
                    {
                        date: 'March 23, 2021',
                        entry: 'Just went out for a well needed run with amazing weather! Keep up the great work everyone!',
                        feeling: 'Great',
                        img: "../public/imgs/running_m2.jpg"
                    },
                    {
                        date: 'March 24, 2021',
                        entry: 'Hiking is great for the calves! What a beautiful morning! Good morining everyone!',
                        feeling: 'Great',
                        img: "../public/imgs/running_m2.jpg"
                    },
                ]
            }
        ],
        (error, data) => {
            res.redirect('/community')
        }
    )
})


module.exports = community;
