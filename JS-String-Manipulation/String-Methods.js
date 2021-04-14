/**********************************************/
// Name of Project: JS String Manipulation.
// Author: Ganesh B Naykawadi.
// Date Created: 12 August, 2020.
/**********************************************/


// declaring the variable
var txt = "Ganesh Naykawadi";

// calculate the length of the string
console.log("The Length of txt is: " + txt.length);


//finding starting position of string - from starting point
console.log("The position of sh in txt (Starting) is: " + txt.indexOf('sh'));


//finding starting position of string - from ending position
console.log("The position of Na in txt (ending) is:" + txt.lastIndexOf('Na'));

//searching substring in a given string
console.log("The wadi found in txt at: " + txt.search('wadi'));

//Extracting String Parts

//01. using slice(start, end) method:
console.log("Slice method output: " + txt.slice(7, ));

//02. using substring(start, end) method:
console.log("Substring method output: " + txt.substring(0, 6));


//03. using substr(start, length) method:
console.log("Substr method output: " + txt.substr(2, 8));

// replacing the string content
console.log("The String replacement result is: " + txt.replace("Ganesh", "Mr. Ganesh"));


// replace all matches
console.log("The all replacement is: " + txt.replace(/i/g, 'a'));

// convert to uppercase letter
console.log("Uppercase letter look is: " + txt.toUpperCase());

// convert to lowercase letter
console.log("lowercase letter look is: " + txt.toLowerCase());

// concat two strings
console.log("The concatination of two string: " + txt.concat(" Junior"));

// trim the string
console.log("The trim function answer is: " + txt.trim());


// Extracting string characters

// 01. charAt(position) method:
console.log("The character at position 7 is: " + txt.charAt(7));

// 02. charCodeAt(position) method:
console.log("The character code of character at position 7 is: " + txt.charCodeAt(7));

// 03. property access[] :
console.log("The character at position 0 is: " + txt[0]);


//convert the string into an array
var arr = txt.split("");
var i;

console.log("The array elements are: \n");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i] + "\n");
}
