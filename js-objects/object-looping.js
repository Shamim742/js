let shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
};
let keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    console.log(key);
}

// show properties name
let propertiesName = Object.keys(shoppingCart);
console.log(propertiesName);

// show properties value
 let propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue)

// target:display key value pair side by side

// for (let i = 0;i < keys.length; i++) {
//     let propertyName = keys[i];
//     let propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, propertyValue)
// };

//  target:display key value pair side by side easy way
for(let propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
