const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')
const authenticated = require('../app/middleware/Authentication')

// site routes
router.use('/login', siteController.login)
router.use('/', authenticated, siteController.index)


module.exports = router