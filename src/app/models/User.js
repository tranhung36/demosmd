const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Must be at least 6 characters, got {VALUE}'],
        max: [12, 'Must be at most 12 characters, got {VALUE}']
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User