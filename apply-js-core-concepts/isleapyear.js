function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
};

const myYear = 2024;
const year = isLeapYear(myYear);
console.log("my year is leap year : ", year)