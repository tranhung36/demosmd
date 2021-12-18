const fetch = require('node-fetch')
const session = require('express-session')
class SiteController {

    // [POST] /login
    login(req, res) {
        const user = {
            email: "testuser@example.com",
            password: "test1234",
        }

        if (req.body.email === user.email && req.body.password === user.password) {
            const username = "Hung Tran"
            session.username = username
            console.log("You are now logged in")
            res.redirect('/')
        }

        res.render('login', {
            layout: 'layouts/layout_login'
        })
    }

    // [GET] /
    async index(req, res) {
        const products = await fetch(`https://fakestoreapi.com/products`);
        const data = await products.json()

        res.render('index', {
            data: data,
        })
    }

}

module.exports = new SiteController