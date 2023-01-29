// return statement
function add(num, num1) {
    console.log(num, num1);
    let sum = num + num1 ;
    // return; throw syntax error
    return sum;
    return 15; //doesn't return anything 
    console.log("I am hungry");//doesn't return anything 
    return something;//doesn't return anything 
}
let total = add(40, 60);
console.log("total: ", total)

// how many singara I eat
function bringSingaras(money) {
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return quantity;
}

let mytaka = 50;
let singaras = bringSingaras(mytaka);
console.log("Eating singaras: ", singaras);