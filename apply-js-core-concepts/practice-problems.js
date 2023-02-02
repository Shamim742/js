// write a function that takes your age as parameter if it is even return true or if it is odd return false
function myAge(age){
    const myAge = age % 2;
    if (myAge === 0){
      console.log(true)
    }
    else{
        console.log(false)
    }
}
const age = 20;
const year = myAge(age);