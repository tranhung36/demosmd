const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/ProductController')

// product routes
router.use('/:slug', productController.product)
router.use('/', productController.products)


module.exports = router