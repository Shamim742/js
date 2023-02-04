const friends = ['tonu', 'faysal', 'siam', 'billal', 'naeem', 'masum', 'masum', 'tonu', 'faysal', 'billal', 'billal'];

function removeFriends(friends){
    const unique = [];
    for(let i = 0; i < friends.length; i++){
        const name = friends[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const names = removeFriends(friends);
console.log(names);