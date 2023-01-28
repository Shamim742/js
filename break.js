// for (let i =1; i <= 20; i++) {
//     console.log(i);
//     if (i >= 5){
//         break;
//     }
// }
// let roastGiven = 0;
// for (let i = 0; i < 10; i++) {
//     if ( i > 4) {
//         break;
//     }
//     console.log('Give them roast cz they bring gift item')
// }
let tableItems = ['bottle', 'notebook', 'Mouse', 'Pen', 'sunglass'];
for (let i = 0; i < tableItems.length; i++) {
    let tableItem = tableItems[i];
    if (tableItem == 'Mouse') {
        break;
    }
//     console.log(tableItem)
// }

let numbers = [45, 87, 89, 56, 32, 51, 25, 82, 188, 73, 77];

for (let i = 0; i < numbers.length; i ++) {
    let number = numbers[i];
    if (number > 100){
        break;
    }
    console.log(number)
}
