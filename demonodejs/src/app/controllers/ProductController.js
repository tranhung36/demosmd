class ProductController {

    // [GET] /products
    products(req, res) {
        res.send('Products')
    }

    // [GET] /products/:slug
    product(req, res) {
        res.send('Product Detail')
    }

}

module.exports = new ProductController