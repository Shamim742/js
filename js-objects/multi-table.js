// write a function that takes a value and display multiplication table
function multiplication(number){
    for(let i = 1; i <= 10; i++){
        let result = i * number;
        console.log(result);
    }
}
const myNumber = 13;
const multiTable = multiplication(myNumber);