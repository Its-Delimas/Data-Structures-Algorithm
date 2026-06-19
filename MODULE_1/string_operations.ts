const firstName: string = "Spencer";

// Access characters
console.log(firstName[0]); //O(1)
console.log(firstName[4]); //O(1)

// length
console.log(firstName.length); //O(1)

// concatenation
const secondName: string = "Delimas";

const result = `${firstName} ${secondName}`; //O(n)

//Slice - extract portion of a string
const str: string = "Hello World";
console.log(str.slice(6)); //O(k) where K is the length of the slice

//Substring
const hello: string = "hello";
console.log(hello.substring(1, 4));
// --output ell

// split    -   convert string to array
const fruits = "apple,banana,mango";
const fruit = fruits.split(",");
console.log(fruit); //O(n)

// Join - covert array -> string
const chars = ["H", "E", "L", "L", "O"];
console.log(chars.join(""));

// uppercase and lowercase
const values: string = "Hello";

console.log(values.toUpperCase());
console.log(values.toLowerCase());

// Replace
const love: string = "I love Java";
console.log(love.replace("Java", "Typescript"));

// Includes
const param: string = "Hello World";
console.log(param.includes("world")); //returns true //O(n)

// STarts With / Ends With
const beginning = "Javascript";
console.log(beginning.startsWith("Java"));
console.log(beginning.endsWith("Script"));

// Index of
const second: string = "banana";
console.log(second.indexOf("a")); //O(n)

// Last index of
console.log(second.lastIndexOf("a"));

// repeat
console.log("ha".repeat(3));

// Trim  - remove whitespaces
const whiteSpace: string = "Who are you ?";
console.log(whiteSpace.trim());

// Convert Character to Array
const stre = "Hello";
const charse = [...stre];

console.log(charse);

// Reverse a string - immutable
const reversed = stre.split("").reverse().join("");
console.log(reversed);
