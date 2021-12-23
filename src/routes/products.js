const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/ProductController')

// product routes
router.get('/:slug', productController.product)
router.get('/', productController.products)


module.exports = router