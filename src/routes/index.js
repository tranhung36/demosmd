const routerProduct = require('./products')
const routerSite = require('./site')

function routes(app) {

    app.use('/products', routerProduct)

    app.use('/', routerSite)

}

module.exports = routes