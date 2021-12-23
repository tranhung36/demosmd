const express = require('express')
const morgan = require('morgan')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')

const routes = require('./routes')
const db = require('./config/db/database')

const app = express()

require('dotenv').config()
app.use(cookieParser('my secret'))
app.use(express.json())

// connect db
db.connect()

// config port
const port = 8080

// middleware
app.use(express.urlencoded({
    extended: true,
}))


// configuration ejs template engine
app.use(expressLayouts)
// static files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'public')))

// engine template
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('combined'))

// routes
routes(app)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})