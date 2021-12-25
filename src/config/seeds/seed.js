const faker = require('faker')
const Product = require('../../app/models/Product')
const db = require('../db/database')
require('dotenv').config()
db.connect()

for (let i = 0; i <= 20; i++) {
    const product = new Product({
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.image()
    })

    product.save((err, data) => {
        if (err) {
            console.log(err)
        }
    })
}