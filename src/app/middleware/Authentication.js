const session = require('express-session')

module.exports = (req, res, next) => {

    if (session.username) {
        return next()
    }

    res.redirect('/login')
}