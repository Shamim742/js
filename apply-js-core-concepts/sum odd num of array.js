// target get of sum of an array and get odd number from array and sum of those odd numbers
function getSumOfAnArray(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        const ele = i;
        const index = nums[ele];
        sum += index;
        console.log(sum, index)
    }
};
const myFriendsAge = [12, 34, 20, 35];
getSumOfAnArray(myFriendsAge);

// sum of an empty array

function getEvenOfAnArray(nums){
    const evenNums = [];
    for(let i = 0; i < nums.length; i++){
        const index = i;
        const element = nums[i];
        if(element % 2 === 0) {
           evenNums.push(element);
        }
    }
    return evenNums;
}

const myNums = [22, 44, 32, 56, 88, 76, 77, 98, 17, 25];
const myEvenNums = getEvenOfAnArray(myNums);