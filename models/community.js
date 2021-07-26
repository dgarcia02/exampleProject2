const mongoose = require('mongoose')
const Schema = mongoose.Schema

const communitySchema = new Schema({
    name: { type: String, required: true },
    dateOfBirth: {
        type: Object,
        required: true,
        month: String,
        day: Number,
        year: Number
    },
    gender: String,
    pronouns: String,
    location: {
        type: Object,
        required: true,
        state: String,
        zip: Number,
    },
    points: Number,
    img: String,
    posts: {
        type: Object,
        date: String,
        entry: String,
        // great, good, tired, exhausted, can barely walk
        feeling: String,
        img: String
    }
})

// this sets up the collection in the database
const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
