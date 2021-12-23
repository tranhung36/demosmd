const express = require('express')
const router = express.Router()
const {
    body
} = require('express-validator')

//TODO: research event emitter

const siteController = require('../app/controllers/SiteController')
const authenticated = require('../app/middleware/Authentication')
const isLogin = require('../app/middleware/isLogin')

// site routes
router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'layouts/layout_login'
    })
})
router.post('/login', isLogin, body('password', 'password must be 5+ characters long').isLength({
    min: 5
}), siteController.login)
router.get('/logout', siteController.logout)
router.get('/', authenticated, siteController.index)


module.exports = router