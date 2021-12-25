const {
    validationResult
} = require('express-validator')
const User = require('../models/User')
const Product = require('../models/Product')
const jwt = require('jsonwebtoken')

class SiteController {

    // [POST] /login
    async login(req, res, next) {
        try {
            const {
                email,
                password
            } = req.body

            const alerts = []

            const user = await User.findOne({
                email,
                password
            })

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const errMsgs = errors.array()

                res.render('login', {
                    layout: 'layouts/layout_login',
                    errMsgs
                })
            }

            if (user) {
                const accessToken = jwt.sign({
                    user
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '30s'
                })

                res.cookie('access_token', `Bearer ${accessToken}`)
                    .redirect('/')
            }
            alerts.push('wrong email or password')
            res.render('login', {
                layout: 'layouts/layout_login',
                alerts
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
        res.redirect("/login")
    }

}

module.exports = new SiteController