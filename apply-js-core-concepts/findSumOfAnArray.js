// target find sum of an array
function getSumOfArray (nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        const index = i;
        const element = nums[index];
        sum += element;
        console.log(i, element, sum)
    }
    return sum;
}
const nums = [23, 45, 67, 87, 54, 25, 78, 45];
getSumOfArray(nums)

// find the sum of an age array 
function getSumOfAge(age) {
    let ageSum = 0;
    for(let i = 0; i < age.length; i++) {
        const len = i;
        const ages = age[len];
        ageSum += ages;
        console.log(i, ages, ageSum);
    }
}
myFriendsAge = [24, 22, 23, 20, 25, 27];
getSumOfAge(myFriendsAge);

// target:even numbers of an array and add them
function getOddNumbersOfAnArray(nums) {
    const oddNums = [];
    for(let i = 0; i < nums.length; i++){
        const index = i;
        const element = nums[index];
       if (element % 2 !== 0) {
        console.log(index, element);
        oddNums.push(element);
       }
    }
    return oddNums;
};
const myNums = [15, 29, 65, 55, 88, 91, 99, 57, 43, 21];
const myOddNums = getOddNumbersOfAnArray(myNums);
console.log(myOddNums);
getSumOfArray(myOddNums);