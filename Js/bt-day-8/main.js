const user = { firstName: "Nguyễn", lastName: "Văn A", age: 25 };
const getFullName = ({firstName, lastName}) => {
    return `${firstName} ${lastName}`
}
console.log(getFullName(user));

/**                                       
    let money = order.price * order.quantity                                        
 0   [{price: 5000, quantity: 3},{price: 12000, quantity: 2},{price: 8000, quantity: 1}]
                     ─────────────┬────────────                                         
 ───────────┬───────────          │            ─────────────┬─────────────              
            │                     │                         │                           
            │                     │                         │                           
            │                     ▼                         │                           
            ▼               sum = 15000                     ▼                           
        sum = 0             money = 24000              sum = 39000                      
        money = 15000       return sum + money         money = 8000                     
        return sum + money                             return sum + money = 47000      
*/
const orders = [
{ item: "Bút", price: 5000, quantity: 3 },
{ item: "Vở", price: 12000, quantity: 2 },
{ item: "Thước", price: 8000, quantity: 1 }
];
const calculateTotal = (orders) => {
    const result = orders.reduce((sum, order) => {
        let money = order.price * order.quantity
        return sum + money
    }, 0)
    console.log(result)
}
calculateTotal(orders)
