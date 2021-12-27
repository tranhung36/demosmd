const express = require('express')
const morgan = require('morgan')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
const db = require('./config/db/database')

const app = express()

require('dotenv').config()

// connect db
db.connect()

// config port
const port = process.env.PORT || 8080

// middleware
app.use(methodOverride('_method'))
app.use(cookieParser('my secret'))
app.use(express.urlencoded({
    extended: true,
}))
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

// engine template
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.set('views', path.join(__dirname, 'views'))

// routes
routes(app)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})