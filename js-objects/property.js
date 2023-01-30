let shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 5,
    mouse: 1,
    pen: 25
};

// when you know property name,use dot notation
// console.log(shoppingCart)
// console.log(shoppingCart.books);
// console.log(shoppingCart.sunglass);
// console.log(shoppingCart.keyboard);
// console.log(shoppingCart.mouse);
// console.log(shoppingCart.pen);

// alternative system
let penCount = shoppingCart['pen']
console.log(penCount)
// showing objects keys

let properties = Object.keys(shoppingCart);
console.log(properties);

// showing objects values 
let propertyValues = Object.values(shoppingCart);
console.log(propertyValues)

// accessing property value 
let propertyName = 'keyboard';
let propertyValue = shoppingCart[propertyName];
console.log(propertyValue)

// accessing property name and value 
console.log(propertyName, propertyValue);
console.log(shoppingCart)
// set properties values in 3 ways 
shoppingCart.mouse = 14; // method 1
console.log(shoppingCart);

shoppingCart['books'] = 90; // method 2
console.log(shoppingCart);

shoppingCart[propertyName] = 76; //method 3
console.log(shoppingCart);