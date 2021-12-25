const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const auth = req.headers.cookie
    const token = auth.split('%20')[1]

    if (!token) {
        res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) res.redirect('/login')
        return next()
    })
}