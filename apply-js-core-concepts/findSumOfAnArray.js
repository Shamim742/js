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