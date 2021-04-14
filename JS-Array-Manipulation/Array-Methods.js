/**********************************************/
// Name of Project: JS Array Manipulation.
// Author: Ganesh B Naykawadi.
// Date Created: 18 August, 2020.
/**********************************************/



//Creating an array and display it's content.

var languages = ["Python", "C++", "JavaScript", "C#"];
// var languages = new Array("Python", "C++", "JavaScript", "C#");


// function to loop through an array & print it.
function printArray(languages) {
    let i = 0;
    while (i < languages.length) {
        console.log(languages[i]);
        i++;
    }
}

// alternative to printArray() is => console.log(languages.toString());

console.log("array elements are: ");
printArray(languages);

// Datatype of array is an "Object".
console.log("Datatype of an array 'languages' is: " + typeof (languages));

//Updating the element of an array
languages[1] = "Perl";

// Updated array
printArray(languages);


// array sort() method is used to sort the array.
languages.sort();
printArray(languages);

// accessing last element of the array
console.log("\nLast element of the array is: " + languages[languages.length - 1]);


/* Associative Array 

Many programming languagess support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.   */

///////////////////////////////////////////////////

/**** JavaScript Array Methods ****/

///////////////////////////////////////////////////

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log("The toString result is: " + languages.toString());

// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
console.log("The join result is: " + languages.join("-"));


// The easiest way to add a new element to an array at end is using the push() method:
func_return = languages.push("Java");
console.log("\nAfter push() elements of the array is: " + func_return);
printArray(languages);


// The pop() method removes the last element from an array: 
func_return = languages.pop();
console.log("\nAfter pop() elements of the array is: " + func_return);
printArray(languages);


// The shift() method removes the first array element and "shifts" all other elements to a lower index.
func_return = languages.shift();
console.log("\nThe result of shift element from an array is: " + func_return);
printArray(languages);


// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
var func_return = languages.unshift("Golang");
console.log("\nThe result of unshift element from an array is: " + func_return);
printArray(languages);


// delete languages[0];  => bad practice - Using delete may leave undefined holes in the array. Use pop() or shift() instead.


// The splice() method can be used to add new items to an array: 
//syntax: array_name.splice(position, how_many_to_remove, new elements..,..,..);
func_return = languages.splice(1, 0, "ASP", "NodeJs");
console.log("\nThe result of splice to add element from an array is: " + func_return);
printArray(languages);

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: 
func_return = languages.splice(4, 1);
console.log("\nThe result of splice to remove an element from an array is: " + func_return);
printArray(languages);


// The concat() method creates a new array by merging (concatenating) existing arrays.
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:
var human_lang = ["Marathi", "Hindi", "English"];
var all_lang = languages.concat(human_lang);
console.log("\nThe elements of all_lang array are: ");
printArray(all_lang);


// The slice() method slices out a piece of an array into a new array.
// The slice() method creates a new array. It does not remove any elements from the source array.
languages = all_lang.slice(0, 5);
console.log("\nAfter Slice result is(languages): ");
printArray(languages);

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
human_lang = all_lang.slice(5);
console.log("\nAfter Slice result is(human_lang): ");
printArray(human_lang);


///////////////////////////////////////////////////

/**** JavaScript Array Sorting ****/

///////////////////////////////////////////////////

languages.sort();
console.log("\nSorted array is: " + languages.toString());


languages.reverse();
console.log("\nReversed array is: " + languages.toString());

// sorting the number with a sort() method.
let numbers = [25, 50, 100, 200];
console.log("\nSorted 'numbers' array is: " + numbers.toString());


// get the highest value from the array
console.log("The highest value from array 'numbers' is: " + numbers[numbers.length - 1]);

//get the lowest value from the array
console.log("The lowest value from array 'numbers' is: " + numbers[0]);


///////////////////////////////////////////////////

/**** JavaScript Array Iteration ****/

///////////////////////////////////////////////////


// foreach
numbers.forEach(iterate);

function iterate(value) {
    console.log(value);
}
console.log("\n");

// map
let square = numbers.map(makeSquare);

function makeSquare(value) {
    console.log(value + " * " + value + " = " + value * value);
}
console.log("\n");


// filter
let over50 = numbers.filter(findNum);

function findNum(value, index, array) {
    if (array[index] > 50)
        console.log(value);
}

// reduce
var sum = numbers.reduce(myFunction);
console.log("The Sum is: " + sum);

function myFunction(total, value, index, array) {
    return total + value;
}

// indexOf
let index = languages.indexOf("JavaScript");
console.log("The JavaScript is at " + index + " position.");


// find
var best = languages.find(findTheBest);

function findTheBest(value, index, array) {
    if (array[index] == "JavaScript") {
        console.log(value + " is the best programming language.");
    }
}

//findIndex
index = languages.findIndex(findIndex);

function findIndex(value, index, array) {
    return value == "Python";
}
console.log("The most loved programming language of all time is at " + index + " place.");
