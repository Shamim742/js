const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// remove elements from an array
// and,if necessary ,inserts new elements in their place,
// will change original array
const partial = friends.splice(0, 2,);
// console.log(partial);

// console.log(friends);

let x = [12, 24, 36, 48, 60, 72, 84, 96];
let part = x.splice(0, 4, 24, 48, 72, 96)
console.log(part)
console.log(x)