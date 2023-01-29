// knowing about parameter and argument
function webDev(name, number) {
    console.log("I learned " + name + " and make " + number + " projects")
}

webDev('HTML', 0);
webDev('CSS', 2);
webDev("CSS Freamworks", 4);

// write a function that takes variable as an argument 
function sum(a, b ,c ,d) {
    let e = 23; let f = 35 ; let g = 45; let h = 9;
    let x = e + f + g + h;
    console.log(x);
}
sum();

// if one parameter not have any value it will show undefine and it's sum will output NaN = Not a Number

function add (i, j, k) {
    console.log(i, j, k)
    let z = i + j + k;
    console.log(z);
}
add(2, 3);

// you can use variable as an argument outside of the function scope

function user(hiUser){
    console.log('Hi ' + hiUser)
}
let name = "shamim";
user(name);