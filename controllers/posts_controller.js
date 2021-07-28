const express = require('express')
const Post = require('../models/posts.js')
const Community = require('../models/community.js')
const post = express.Router()


// =========== NEW ROUTE ===========//
// this is for the regular schema new.ejs
// post.get('/new', (req, res) => {
//     res.render(
//         'posts/new.ejs',
//         {
//             currentUser: req.session.currentUser
//         }
//     );
//     // res.redirect('/posts/:id')
// })

// ---- this is for the relational ---- //
post.get('/new', (req, res) => {
    // try to find only member ObjectId
    Community.find({}, (err, allMembers) => {
        res.render(
            'posts/new.ejs',
            {
                // this shows all the members in community database
                members: allMembers,
                // this is if user has a session open
                currentUser: req.session.currentUser
            }
        )
        res.redirect('/posts')
    })
    // res.send('test')
})


// =========== EDIT ROUTE ===========//
post.get('/:id/edit', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        res.render(
            'posts/edit.ejs',
            {
                post: foundPost,
                currentUser: req.session.currentUser
            }
        )
    })
})


// =========== DELETE ROUTE ===========//
post.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/posts')
    })
})


// =========== SHOW ROUTE ===========//
// post.get('/:id', (req, res) => {
//     Post.findById(req.params.id, (err, foundPost) => {
//         Community.findOne({'posts._id': req.params.id}, (err, foundMember) => {
//             res.render(
//                 'community/show.ejs',
//                 {
//                     member: foundMember,
//                     post: foundPost
//                 }
//             )
//         })
//     })
// })


// =========== UPDATE ROUTE ===========//
post.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedPost) => {
        res.redirect('/posts')
    })
})


// =========== CREATE ROUTE ===========//
// this is for the regular schema without relationship
// post.post('/', (req, res) => {
//     Post.create(req.body, (error, createdPost) => {
//         res.redirect('/posts')
//     })
// })

// ---- this is for the relational schema ---- //
// new post will push to members array
post.post('/', (req, res) => {
    // find by the document id; double check if this is right
    Community.findById(req.body.communityId, (err, foundMember) => {
        // creating post
        Post.create(req.body, (err, createdPost) => {
            // pushing post into member's post array
            foundMember.posts.push(createdPost)
            foundMember.save((err, data) => {
                res.redirect('/community')
            })
        })
    })
})


// =========== INDEX ROUTE ===========//
post.get('/', (req, res) => {
    Post.find({}, (err, foundPosts) => {
        res.render(
            'posts/index.ejs',
            {
                posts: foundPosts,
                currentUser: req.session.currentUser
            }
        )
    })
})


// =========== SEED ROUTE ===========//
post.get('/setup/seed', (req, res) => {
    Post.deleteMany({}, () => {})
    Post.create(
        [
            {
                postText: "Best part of my day! #BikeAdventures",
                // postDate: { type: Date, default: Date.now },
                feeling: 'Good',
                img: "https://images.unsplash.com/photo-1598132669477-d2d3e1a2501f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                // points: { default: 0 },
                // postedBy: { type: mongoose.Schema.Types.ObjectId }
            }
        ],
        (error, data) => {
            res.redirect('/posts')
        }
    )
})


module.exports = post;
