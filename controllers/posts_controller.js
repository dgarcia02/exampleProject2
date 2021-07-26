const express = require('express')
const Post = require('../models/posts.js')
const post = express.Router()

// =========== NEW ROUTE ===========//
post.get('/new', (req, res) => {
    res.render('posts/new.ejs');
    res.redirect('/posts')
    // res.send('test')
})

// =========== DELETE ROUTE ===========//
post.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/posts')
    })
})

// =========== CREATE ROUTE ===========//
post.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        res.redirect('/posts')
    })
})


// =========== INDEX ROUTE ===========//
post.get('/', (req, res) => {
    Post.find({}, (err, foundPosts) => {
        res.render(
            'posts/index.ejs',
            {
                posts: foundPosts
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
