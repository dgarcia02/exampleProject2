const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const Community = require('./community.js')

const postSchema = new Schema({
    caption: String,
    postDate: { type: Date, default: Date.now },
    feeling: String,
    img: String,
    points: { default: 0 },
    memberId: String
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
