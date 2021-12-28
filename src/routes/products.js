const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/ProductController')
const authorization = require('../app/middleware/Authorization')

/**
 * PRODUCT ROUTES:
 * 
 * create product
 */
router.get('/create', authorization, productController.create)
router.post('/store', productController.store)
// update product
router.get('/edit/:_id', authorization, productController.edit)
router.put('/:_id', productController.update)
// show product
router.get('/:slug', authorization, productController.show)
router.get('/', authorization, productController.index)


module.exports = router