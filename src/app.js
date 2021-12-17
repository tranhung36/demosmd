const express = require('express')
const morgan = require('morgan')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const routes = require('./routes')

// config port
const app = express()
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