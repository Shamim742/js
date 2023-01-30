function isEven(even){
    const remainder = even % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
};

const myNumber = isEven(455);
console.log(myNumber)
const hisNumber = isEven(56);
console.log(hisNumber)