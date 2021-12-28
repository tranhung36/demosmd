const Product = require('../models/Product')
const slugify = require('slugify')
const decodeJWT = require('jwt-decode')

class ProductController {

    // [GET] /products
    index(req, res) {
        let page = req.query.page
        if (!page) page = 1

        const limit = 12
        const skip = (page - 1) * limit

        const auth = req.headers.cookie
        const token = auth.split('%20')[1]
        const user = decodeJWT(token)

        Product.find({
                owner: user._id
            })
            .populate('owner')
            .limit(limit)
            .skip(skip)
            .sort('-price')
            .exec((err, products) => {
                Product.countDocuments({
                    owner: user._id
                }, (err, count) => {
                    if (err) console.log(err)
                    res.render('products/index', {
                        products,
                        current: page,
                        pages: Math.ceil(count / limit)
                    })
                })
            })
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
                slug: slugify(title, {
                    replacement: '-', // replace spaces with replacement character, defaults to `-`
                    remove: undefined, // remove characters that match regex, defaults to `undefined`
                    lower: true, // convert to lower case, defaults to `false`
                    strict: true, // strip special characters except replacement, defaults to `false`
                    locale: 'en', // language code of the locale to use
                }),
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

    // [GET] /products/edit/:_id
    async edit(req, res) {
        const product = await Product.findOne({
            _id: req.params._id
        })
        res.render('products/edit', {
            product
        })
    }

    // [PUT] /products/update/:_id
    async update(req, res) {
        const {
            title,
            description,
            price,
            image
        } = req.body

        Product.updateOne({
                _id: req.params._id
            }, {
                title,
                description,
                slug: slugify(title, {
                    replacement: '-', // replace spaces with replacement character, defaults to `-`
                    remove: undefined, // remove characters that match regex, defaults to `undefined`
                    lower: true, // convert to lower case, defaults to `false`
                    strict: true, // strip special characters except replacement, defaults to `false`
                    locale: 'en', // language code of the locale to use
                }),
                price,
                image
            })
            .then(() => res.redirect('/products'))
            .catch(err => console.log(err))
    }

}

module.exports = new ProductController