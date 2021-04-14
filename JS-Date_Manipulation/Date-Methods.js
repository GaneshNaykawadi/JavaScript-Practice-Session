/**********************************************/
// Name of Project: JS Date Manipulation.
// Author: Ganesh B Naykawadi.
// Date Created: 21 August, 2020.
/**********************************************/

// There are 4 ways to create a Date Object

let d = new Date();
console.log(d);


let d1 = new Date(2019, 04, 19, 22, 45, 30);
console.log(d1);


let d2 = new Date(2020);
console.log(d2);


let d3 = new Date("August 21, 2021 12:00:00");
console.log(d3);


// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC.
d = new Date(0);
console.log(d);

// The toUTCString() method converts a date to a UTC string
console.log("UTC Format is: " + d.toUTCString());


// The toISOString() method converts a date to a string, using the ISO standard format.
console.log("ISO Format is: " + d.toISOString());

//set date to today's date
d = new Date();

//These methods can be used for getting information from a date object:
console.log("Year is: " + d.getFullYear());
console.log("Month is: " + (d.getMonth() + 1));
console.log("Date is: " + d.getDate());
console.log("Hour is: " + d.getHours());
console.log("Minutes is: " + d.getMinutes());
console.log("Seconds is: " + d.getSeconds());
console.log("Miliseconds is: " + d.getMilliseconds());
console.log("Time is: " + d.getTime());


// Below are the UTC methods, same works as above but for only UTC.
/*

d.getUTCDate();
d.getUTCDay();	
d.getUTCFullYear(); 	
d.getUTCHours();	
d.getUTCMilliseconds();	
d.getUTCMinutes();	
d.getUTCMonth();
d.getUTCSeconds();

*/



let first_date = new Date();
let second_date = new Date("2020-08-29");
let difference = diff_btwn_Dates(first_date, second_date);
console.log("Difference between two dates is: " + difference);


/* Useful Functions */

// Function to calculate difference between two dates.
function diff_btwn_Dates(date_1, date_2) {
    const diffTime = Math.abs(date_2 - date_1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
