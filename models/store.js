const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
    product: String,
    description: {
        brand: String,
        manufacturer: String,
        fabric: String,
        fit: String,
        color: String
    },
    price: Number,
    points: Number,
    img: String
})

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
