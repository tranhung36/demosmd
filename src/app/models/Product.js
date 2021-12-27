const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'
    },
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