const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const productSchema = new Schema({
    title: String,
    description: String,
    price: String,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product