const fetch = require('node-fetch')

class SiteController {

    // [GET] /
    async index(req, res) {
        const products = await fetch(`https://fakestoreapi.com/products`);

        const data = await products.json()

        res.render('index', {
            data: data,
        })
    }

    // [POST] /login
    login(req, res) {
        const user = {
            email: "testuser@example.com",
            password: "test1234"
        }

        if (req.body.email === user.email && req.body.password === user.password) {
            console.log("You are now logged in")
            res.redirect('/')
        }

        res.render('login', {
            layout: 'layouts/layout_login'
        })
    }

}

module.exports = new SiteController