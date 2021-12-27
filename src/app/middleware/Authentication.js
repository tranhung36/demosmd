const {
    verifyJWT
} = require('../../utils/jwt')

module.exports = (req, res, next) => {
    const auth = req.headers.cookie
    if (auth) {
        const token = auth.split('%20')[1]
        if (verifyJWT(token)) {
            return next()
        }
    }
    res.redirect('/login')

}