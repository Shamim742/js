const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2 },
    {name: 'shirt', price: 2200, quantity: 5 },
    {name: 'pant', price: 3700, quantity: 4 },
    {name: 'belt', price: 600, quantity: 3 },
];
function totalCost(products){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        total = total + productTotal;
        // console.log(product)
    }
    return total;
};

const expense = totalCost(shoppingCart)
console.log('Total expense today: ', expense);