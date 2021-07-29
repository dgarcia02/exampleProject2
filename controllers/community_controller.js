const express = require('express')
const Community = require('../models/community.js')
// const Post = require('../models/posts.js')
const community = express.Router()


// =========== NEW ROUTE ===========//
community.get('/new', (req, res) => {
    res.render(
        'community/new.ejs',
        {
            currentUser: req.session.currentUser
        }
    );
    res.redirect('/community/:id')
    // res.send('test')
})

// =========== EDIT ROUTE ===========//
community.get('/:id/edit', (req, res) => {
    Community.findById(req.params.id, (error, foundMember) => {
        res.render(
            'community/edit.ejs',
            {
                member: foundMember,
                currentUser: req.session.currentUser
            }
        )
    })
})

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
                member: foundMember,
                currentUser: req.session.currentUser
            }
        )
    })
})

// =========== UPDATE ROUTE ===========//
community.put('/:id', (req, res) => {
    Community.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedProfile) => {
            res.redirect('/community')
        }
    )
})

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
                members: allMembers,
                currentUser: req.session.currentUser
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
                gender: 'Non-Binary',
                pronouns: 'They/Them',
                location: {
                    state: 'OH',
                    zip: 45768
                    },
                points: 0,
                img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
                posts: [{}]
            },
            {
                name: 'Josh Martinez',
                dateOfBirth: {
                    month: 'September',
                    day: 20,
                    year: 1997,
                    },
                gender: 'Male',
                pronouns: 'He/Him',
                location: {
                    state: 'NY',
                    zip: 11226
                    },
                points: 0,
                img: "https://i.imgur.com/m2xVTym.jpg",
                posts: []
            },
            {
                name: 'Cherice Lawrence',
                dateOfBirth: {
                    month: 'May',
                    day: 15,
                    year: 1983,
                    },
                gender: 'Female',
                pronouns: 'She/Her',
                location: {
                    state: 'CA',
                    zip: 90011
                    },
                points: 0,
                img: "https://images.pexels.com/photos/7229123/pexels-photo-7229123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                posts: []
            },
            {
                name: 'Nella Paulson',
                dateOfBirth: {
                    month: 'March',
                    day: 05,
                    year: 1985,
                    },
                gender: 'Female',
                pronouns: 'She/Her',
                location: {
                    state: 'NJ',
                    zip: 07304
                    },
                points: 0,
                img: "https://i.imgur.com/YWzpFdN.jpg",
                posts: []
            },
        ],
        (error, data) => {
            res.redirect('/community')
        }
    )
})


module.exports = community;




// talia posts
// {
//     date: 'May 16, 2021',
//     entry: "Best part of my day! #BikeAdventures",
//     feeling: 'Good',
//     img: "https://images.unsplash.com/photo-1598132669477-d2d3e1a2501f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
// },
// {
//     date: 'May 18, 2021',
//     entry: 'Keep up the great work everyone!',
//     feeling: 'Great',
//     img: "https://images.unsplash.com/photo-1598132669477-d2d3e1a2501f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
// }
