const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tranqhung36:angelo8136@hung-demo.n5zjz.mongodb.net/hung-demo?retryWrites=true&w=majority')
        console.log('connect successfully')
    } catch (error) {
        console.log('error connecting')
    }
}

module.exports = {
    connect
}