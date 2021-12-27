const Product = require('../models/Product')

class ProductController {

    // [GET] /products
    index(req, res) {
        Product.find({})
            .sort('-price')
            .then(data => res.render('products/index', {
                data
            }))
            .catch(err => console.log(err))
    }

    // [GET] /products/:slug
    show(req, res) {
        res.send('Product Detail')
    }

    // [POST] /products/store
    store(req, res) {
        res.send('Product Store')
    }

}

module.exports = new ProductController