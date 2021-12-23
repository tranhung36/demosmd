const fetch = require('node-fetch')
const {
    validationResult
} = require('express-validator')
const User = require('../models/User')

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
                res.cookie("username", user.username, {
                    signed: true
                })
                res.redirect('/')
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
    async index(req, res) {
        try {
            const products = await fetch(process.env.API);
            const data = await products.json()

            res.render('index', {
                data: data,
            })
        } catch (error) {
            res.sendStatus(403)
        }
    }

    // [GET] /logout
    logout(req, res) {
        res.clearCookie("username")
        res.redirect("/login")
    }

}

module.exports = new SiteController