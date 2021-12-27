const {
    validationResult
} = require('express-validator')
const User = require('../models/User')
const Product = require('../models/Product')
const {
    signJWT
} = require('../../utils/jwt')

class SiteController {

    // [POST] /login
    async login(req, res) {
        try {
            const {
                email,
                password
            } = req.body

            const user = await User.findOne({
                email,
                password
            })

            const errors = validationResult(req)

            if (user) {
                const data = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                }

                const accessToken = signJWT(data, '1h')

                res.cookie('access_token', `Bearer ${accessToken}`, {
                        maxAge: 3600 * 1000,
                        httpOnly: true,
                        secure: true
                    })
                    .redirect('/')
            }
            res.render('login', {
                layout: 'layouts/layout_login',
                errors: errors.array()
            })
        } catch (error) {
            console.log(error)
        }

    }

    // [GET] /
    index(req, res) {
        Product.find({})
            .sort('-price')
            .then(data => res.render('index', {
                data
            }))
            .catch(err => console.log(err))
    }

    // [GET] /logout
    logout(req, res) {
        res.clearCookie("access_token")
            .redirect("/login")
    }

}

module.exports = new SiteController