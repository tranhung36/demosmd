const faker = require('faker')
const Product = require('../../app/models/Product')
const db = require('../db/database')
const slugify = require('slugify')
const decodeJWT = require('jwt-decode')

require('dotenv').config()
db.connect()

for (let i = 0; i <= 100; i++) {
    const product = new Product({
        title: faker.commerce.productName(),
        slug: slugify(faker.commerce.productName(), {
            lower: true
        }),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.image(),
        owner: '61c42ba719a47a4392435903'
    })

    product.save((err, data) => {
        if (err) {
            console.log(err)
        }
    })
}