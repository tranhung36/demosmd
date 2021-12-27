const jwt = require('jsonwebtoken')

module.exports = {
    signJWT: (data, expiresIn) => {
        return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn
        })
    },
    verifyJWT: (token) => {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) return false
            return true
        })
    }
}