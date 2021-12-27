const Product = require('../models/Product')
const slugify = require('slugify')

const options = {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'en', // language code of the locale to use
};
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

    // [GET] /products/create
    create(req, res) {
        res.render('products/create')
    }

    // [POST] /products/store
    store(req, res) {
        try {
            const {
                title,
                description,
                price,
                image
            } = req.body

            const product = new Product({
                title,
                slug: slugify(title, options),
                description,
                price,
                image
            })

            product.save(err => {
                if (err) console.log('err')
            })

            res.redirect('/products')
        } catch (error) {
            console.log(error)
        }
    }

    // [GET] /products/edit/:slug
    async edit(req, res) {
        const product = await Product.findOne({
            slug: req.params.slug
        })
        res.render('products/edit', {
            product
        })
    }

    // [PUT] /products/update/:slug
    async update(req, res) {
        const {
            title,
            description,
            price,
            image
        } = req.body

        const product = await Product.findOne({
            slug: req.params.slug
        })

        Product.updateOne({
                _id: product._id
            }, {
                title,
                description,
                slug: slugify(title, options),
                price,
                image
            })
            .then(() => res.redirect('/products/'))
            .catch(err => console.log(err))
    }

}

module.exports = new ProductController