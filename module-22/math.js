const result = Math.pow(3, 8);
// console.log(result);

// Math.abs using problem
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2) // it gives absolute number -20 and 20 are same
if (gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
}
const result1 = Math.ceil(2.0001);//Math.ceil giving higher number
console.log(result1)

const result2 = Math.floor(456.9999);
console.log(result2);

// Math.Random always give me floating number
for (let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6)
    console.log(random);
}
