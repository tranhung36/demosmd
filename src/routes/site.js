const express = require('express')
const router = express.Router()
const {
    body
} = require('express-validator')

//TODO: research event emitter

const siteController = require('../app/controllers/SiteController')
const authorization = require('../app/middleware/Authorization')

// site routes
router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'layouts/layout_login'
    })
})
router.post('/login', body('password', 'password must be 5+ characters long').isLength({
    min: 5
}), siteController.login)
router.get('/logout', siteController.logout)
router.get('/', authorization, siteController.index)


module.exports = router