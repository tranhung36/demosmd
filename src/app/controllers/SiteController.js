const fetch = require('node-fetch')
const {
    validationResult
} = require('express-validator')
class SiteController {

    // [POST] /login
    login(req, res) {
        const user = {
            email: "testuser@example.com",
            password: "test1234",
        }
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const errMsgs = errors.array()

            res.render('login', {
                layout: 'layouts/layout_login',
                errMsgs
            })
        }

        const email = req.body.email
        const password = req.body.password
        const alerts = []

        if (email == user.email && password == user.password) {
            res.cookie("username", "Hung Tran", {
                signed: true
            })
            console.log("You are now logged in")
            res.redirect('/')
        } else if (email != user.email || password != user.password) {
            alerts.push('wrong email or password')
        }

        res.render('login', {
            layout: 'layouts/layout_login',
            alerts
        })

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