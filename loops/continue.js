// target: take break in array when it is upper then 50
let numbers = [45, 34, 27, 35, 12, 48, 87, 89, 56, 32, 51, 25, 82, 188, 73, 77];

for (let i = 0; i < numbers.length; i ++) {
    let number = numbers[i];
    if (number > 50){
        continue;
    }
    console.log(number)
}
// target : iterate the loop when tableItems is equal to "Pen"
let tableItems = ['bottle', 'notebook', 'Mouse', 'Pen', 'sunglass'];
for (let i = 0; i < tableItems.length; i++) {
    let tableItem = tableItems[i];
    if (tableItem == 'pen') {
        continue;
    }
    console.log(tableItem)
}