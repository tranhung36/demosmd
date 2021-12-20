module.exports = (req, res, next) => {

    if (!req.signedCookies.username) {
        return next()
    }

    res.redirect('/')
}