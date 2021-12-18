const express = require('express')
const morgan = require('morgan')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')

const routes = require('./routes')
const db = require('./config/db/database')

const app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))

// connect db
db.connect()

// config port
const port = 3000

// middleware
app.use(express.urlencoded({
    extended: true,
}))


// configuration ejs template engine
app.use(expressLayouts)
// static files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(path.join(__dirname, 'public')))
app.use('/js', express.static(path.join(__dirname, 'public')))

// engine template
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('combined'))

// routes
routes(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})