const mongoose = require('mongoose')
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
    points: Number,
    img: String,
    posts: [
        {
            date: Date,
            entry: String,
            // great, good, tired, exhausted, can barely walk
            feeling: String,
            img: String,
            points: Number
        }
    ]
})

// this sets up the collection in the database
const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
