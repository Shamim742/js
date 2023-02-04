// display the sum of objects price
const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600}
];
function totalCost(products){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        total = total + product.price;
        // console.log(product)
    }
    return total;
};

const expense = totalCost(shoppingCart)
console.log('Total expense today: ', expense);