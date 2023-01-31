function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
};

const myYear = isLeapYear(2004);
console.log("my year is leap year : ", myYear)