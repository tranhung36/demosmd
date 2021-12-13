var productsApi = 'https://fakestoreapi.com/products';

fetch(productsApi)
    .then(res => res.json())
    .then((products) => {
        var htmls = products.map((product) => {
            return `<div class="product text-center col-lg-3 col-md-4 col-12">
                <img src="${product.image}" alt="" class="img-fluid mb-3">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="product-name">
                    ${product.title}
                </h5>
                <h4 class="product-price">
                    $${product.price}
                </h4>
                <button class="buy-btn">Buy Now</button>
            </div>`
        });

        var html = htmls.join('');
        document.getElementById('products').innerHTML = html;
    })
    .then(json => console.log(json))

