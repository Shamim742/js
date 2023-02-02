// inches to feet convertor
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
};

const myInches = 144;
const myFeet = inchToFeet(myInches);
console.log('My Inches: ', myFeet);

// miles to kilometer convertor

function milesToKm(miles){
    const km = miles * 1.609;
    return km;
};
const myMiles = 4;
const myKm = milesToKm(myMiles);
console.log('My Kilometers : ',myKm)

// hours to minute convertor
function hoursToMinute(hours){
    const minutes = hours * 60;
    return minutes;
}
const myHours = 20;
const myMinutes = hoursToMinute(myHours);
console.log(myMinutes);