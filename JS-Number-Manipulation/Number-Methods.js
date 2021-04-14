/**********************************************/
// Name of Project: JS String Manipulation.
// Author: Ganesh B Naykawadi.
// Date Created: 15 August, 2020.
/**********************************************/


//declaring the variable
var x = 123;

// toString() method returns a number as a string.
console.log(x.toString());


// toExponential() returns a string, with a number rounded and written using exponential notation.
var y = 12.767678;
console.log(y.toExponential(4));


// toFixed() returns a string, with the number written with a specified number of decimals.
console.log(y.toFixed(2));


//toPrecision() returns a string, with a number written with a specified length.
console.log(y.toPrecision(4));

//Adding numbers and string - always returns string.
var x = 20;
var y = "30";
var z = x + y;
console.log("Addition is: " + z);


//Substracting from string always returns number.
z = y - x;
console.log("Substraction is: " + z);


//Multiplication from string always returns number.
z = x * y;
console.log("Multiplication is: " + z);


//Division from string always returns number.
z = y / x;
console.log("Division is: " + z);


// Number Conversion methods
var a = "10";
var b = true;
var c = "10.35";

console.log("Type of a is: " + typeof (Number(a)));
console.log("Type of b is: " + typeof (Number(b)));

console.log("converting b to number: " + Number(b));
console.log("converting a to number: " + parseInt(a));
console.log("converting c to float: " + parseFloat(c));


// JavaScript Number Properties
console.log("The maximum value in JS is: " + Number.MAX_VALUE);
console.log("The minimum value in JS is: " + Number.MIN_VALUE);


// NaN is a JavaScript reserved word indicating that a number is not a legal number.
z = x * "Apple";
console.log("Result is: " + z);

// Infinity
z = 2;
while (z != Infinity) {
    z *= z;
}
console.log("Result is: " + z);
console.log("Result is: " + -z);

let randomNo = getRandomNofunction(x, y);
console.log("Random Number between " + x + " and " + y + " is: " + randomNo);


//function to get random number.
function getRandomNofunction(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
