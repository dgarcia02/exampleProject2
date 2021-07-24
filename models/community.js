const mongoose = require('mongoose')
const Schema = mongoose.Schema

const communitySchema = new Schema({
    name: { type: String, required: true },
    dateOfBirth: String,
    gender: String,
    pronouns: String,
    location: { type: String, required: true },
    points: Number,
    img: String
})

// this sets up the collection in the database
const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
