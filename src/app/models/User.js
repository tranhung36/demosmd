const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
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