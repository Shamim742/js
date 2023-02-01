function factorial (number) {
    let num = 1;
    let result = 1;
    while (num <= 7){
        result = result * num;
        num++;
    }
    return result;
};
const myNumber = 6;
const fact = factorial(myNumber);
console.log('factorial of number:', myNumber, fact);
