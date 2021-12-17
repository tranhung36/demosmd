class SiteController {

    // [GET] /
    index(req, res) {
        res.render('index')
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