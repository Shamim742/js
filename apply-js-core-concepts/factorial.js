function factorial (number) {
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
};
const myNumber = 3;
const result = factorial (myNumber);
console.log('factorial: ', myNumber, result);