const cart = [
{ id: 1, name: "Laptop", price: 1500 },
{ id: 2, name: "Phone", price: 800 },
{ id: 3, name: "Tablet", price: 500 }
];

const removeItemAfterDelay = (productId, delay) => {
    const removeIndex = cart.findIndex(prod => prod.id === productId)
    if(removeIndex !== -1) {
        setTimeout(() => {
            cart.splice(removeIndex, 1)
            console.log(cart)
        }, delay)
    }
}
removeItemAfterDelay(2, 1000)
/*
    const cart = [...]
        │
        │
        ▼
    const removeIndex = cart.findIndex(prod => prod.id === productId)
        │
        │
        │
        ▼                 
    if(removeIndex !== -1)
        │
        │ yes
        │
        ▼
    setTimeout 
        │
        │
        ▼
    cart.splice(removeIndex, 1)
        │
        │
        ▼
    console.log(cart)

 */