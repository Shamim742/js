// 1.variable 
let myName = 'Khan';

// math operation : +, -, *, /
// shortHand : +=, --, *=, /=
// ++, --

// array
let friends = ['abul','babul','cabul', 'dabul','ebul'];

// conditionals 
//  >, <, >=, <=, ==, ===, !=, !==

if (friends.length < 2) {
    console.log('fokir tor kono friend nai')
}
else{
    console.log('tor onk bondu, pera dei khali')
}
// while loop 
let num = 0;
while (num <= 6) {
    console.log(num);
    num++
}

// for loop 
for (let i = 1; i <= 10; i++){
    console.log(i)
}
// 5.function
function isMoonUp(time) {
    if( time > 7){
        console.log("yes, it is!")
    }
    else{
        console.log('no not now')
    };
};

isMoonUp(8);

// 6.object
let janeman = {
    height:'5.4"',
    baapertaka: 'borolokz',
    romanticism: 'heavvy',
};

console.log(janeman.romanticism)