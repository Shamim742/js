let first = 5;
let second = 7;
console.log(first, second);
// this wrong approach
// first = second;
// second = first;

// approach: 1
// const temp = first;
// first = second;
// second = temp;

// approach : 2 - Destructuring (array to array method)
// [ first, second ] = [ second , first ]
// approach : 3 for numeric value
first = first + second;
second = first - second;
first = first -second;

console.log(first, second);