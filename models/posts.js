const mongoose = require('mongoose')
const Community = require('./community.js')
const Schema = mongoose.Schema

const postSchema = new Schema({
    postText: String,
    postDate: { type: Date, default: Date.now },
    feeling: String,
    img: String,
    points: { default: 0 },
    postedBy:
        {
            type: Schema.Types.ObjectId.name,
            ref: 'Community'
        },
        // { timestamps: true }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
