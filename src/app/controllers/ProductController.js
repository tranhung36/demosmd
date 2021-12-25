const Product = require('../models/Product')

class ProductController {

    // [GET] /products
    index(req, res) {
        Product.find({})
            .sort('-price')
            .then(data => res.render('products', {
                data
            }))
            .catch(err => console.log(err))
    }

    // [GET] /products/:slug
    show(req, res) {
        res.send('Product Detail')
    }

}

module.exports = new ProductController