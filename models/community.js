const mongoose = require('mongoose')
// const Post = require('./posts.js')
const Schema = mongoose.Schema


const communitySchema = new Schema({
    name: { type: String, required: true },
    dateOfBirth: {
        month: String,
        day: Number,
        year: Number,
    },
    gender: String,
    pronouns: String,
    location: {
        state: String,
        zip: Number,
    },
    points: { default: 0 },
    img: String,
    posts: [Post.schema]
})

// this sets up the collection in the database
const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
