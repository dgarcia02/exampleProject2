const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    postText: String,
    postDate: { type: Date, default: Date.now },
    feeling: String,
    img: String,
    points: { default: 0 },
    postedBy: { type: mongoose.Schema.Types.ObjectId }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
