const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id:121,
    class:11,
    name:'shamim'
};
const friends = [13, 14, 17, 20, 22, 12, 16, 21];
function add(num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(21));
console.log(friends.includes(40));

// concat : put two array together
const newFriendsAge = [12, 15, 18, 19];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)