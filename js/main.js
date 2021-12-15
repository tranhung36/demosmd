const username = localStorage.getItem("username");
const logoutEle = document.getElementById("logout");
const nameElement = document.getElementById("username");

const productsApi = `https://fakestoreapi.com/products`;

if (username) {
    nameElement.innerText = username;
    logoutEle.innerText = "Logout";
}
logoutEle.onclick = (e) => {
    localStorage.removeItem("username");
};


fetch(productsApi)
    .then((response) => response.json())
    .then((data) => {
        $("#list").pagination({
            dataSource: data,
            pageSize: 8,
            callback: (data) => {
                const newProducts = data.map((product) => {
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
                </div>`;
                });
                const html = newProducts.join("");
                document.getElementById("products").innerHTML = html;
            },
        });
    })
    .catch((error) => {
        console.log(error);
    });