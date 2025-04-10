let prodList = document.querySelector('.prod-list');

fetch('https://fakestoreapi.com/products')
.then(e => {
    return e.json()
})
.then(products => {
    console.log(products)
    for (const product of products) {
        const div = document.createElement('div')
        div.classList.add('prod-item')

        div.innerHTML = `
            <img src="${product.image}" alt="Product">
            <div class="prod-name">
                <h3><a href="">${product.title}</a></h3>
            </div>
            <div class="prod-price">${product.price}$ </div>
            <div class="description">
                <p>${product.description}</p>
            </div>
            <div class="evaluate">
                <div class="sale">Giảm 10%</div>
                <div class="rate">
                    <p>Rate ${product.rating.rate}</p>
                </div>
                <div class="sold">
                    <span>Sold ${product.rating.count}</span>
                </div>
                <div class="sale">Giảm 10%</div>
            </div>
        `
        prodList.appendChild(div)
    }
})
