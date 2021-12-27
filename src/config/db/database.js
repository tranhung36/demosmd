const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose
            .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@hung-demo.n5zjz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
        console.log('connect successfully')
    } catch (error) {
        console.log('error connecting')
    }
}

module.exports = {
    connect
}