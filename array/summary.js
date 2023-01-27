let destinations = ['sajek', 'coxsbazar','nepal', 'SP','bali'];

console.log(destinations[3])
destinations[2] ='thailand';

// destinations.unshift('Arab')
// destinations.shift()
destinations.push('Turkey')
destinations.pop()
console.log(destinations)

// conditionals
// comparison <,>,==, !=,<=,>+
// &&, ||, !

if (destinations[1] === 'SP') {
    console.log('khali pani ar pani')
}
else if(destinations[2] === 'coxsbazar'){
    console.log('I am going there')
}
else if (destinations.length == 3){
    console.log('Many places you visited')
}
else if(destinations.length != 5) {
    console.log('You can not count simple math')
}
else{
    console.log('You need to practice more and more')
}