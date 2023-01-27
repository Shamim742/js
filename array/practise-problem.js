// practice problem 1 
let fruits = ['Apple', 'Banana', 'Orange']
// a
console.log(fruits.indexOf('Banana'))
fruits [1] = 'Mango'
console.log(fruits)
// b
fruits.pop();
fruits.push('Watermelon');
console.log(fruits)
// practice problem 2
let myResult = 85;

if (myResult > 80) {
    console.log('A grade')
}
else if (myResult > 60) {
    console.log('B grade')
}
else if (myResult > 50) {
    console.log('C grade')
}
else if (myResult > 40) {
    console.log('D grade')
}
else {
    console.log('F grade')
}

// practice prob 3.a
let a = 13;
let b = 79;
let c = 45;
if (a > b && a >c) {
    console.log('a is greater then b & c')
}
else if (b > a && b > c) {
    console.log('b is greater then a & c')
}
else {
    console.log('c is greater then a & b')
}
// another method
let x = 13;
let y = 79;
let z = 45;

console.log(Math.max(x,y,z) ,'is greater number')

// practice problem 3.b
let d = 9;
let e = 8;
let f = 9;

if (( d == e && e == f) || ( f == d || f == e)) {
   console.log('Triangle is Isosceles')
}
else{
   console.log('Triangle is not Isosceles')
}