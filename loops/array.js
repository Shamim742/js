// let numbers = [45, 87, 89, 56, 32, 51, 25, 82, 73, 77];

// for (let i = 0; i < numbers.length; i ++) {
//     let number = numbers[i];
//     console.log(number)
// }

let tableItems = ['bottle', 'notebook', 'Mouse', 'Pen', 'sunglass'];
tableItems[2] = 'box';
tableItems.pop();
tableItems.unshift('toys')
tableItems.shift();
tableItems.push('Watch');

for (let i = 0; i < tableItems.length; i++) {
    let tableItem = tableItems[i];
    console.log(tableItem)
}