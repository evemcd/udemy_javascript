let js = "amazing";
console.log(40 + 8 + 23 - 10);

//value is a piece of data (string)
console.log("Eve");
console.log(36);

let firstName = "Eve";
console.log(firstName);

//can't start variable names with numbers. names can only contain letters, numbers, _ and $. shouldn't start variable names with upper case letters

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";
//is better than
let job1 = "Teacher";
let job2 = "Programmer";
//as it's more descriptive


/* data types (don't have to be defined)
-numbers (decimals and integers)
-string (text)
-boolean (true or false)
-undefined (empty value)
-null (empty value)
-symbol (unique and cannot be changed) - ES2015
-bigInt (larger integers than numbers can hold) - ES2020
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);               //boolean
console.log(typeof javascriptIsFun);    //boolean
console.log(typeof 23);                 //number
console.log(typeof "Eve");              //string

javascriptIsFun = "YES!";
//reassigns the value of the variable
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);               //undefined

year = 1986;
console.log(typeof year);               //number


//let, const and var

let age = 30;
age = 31;
//mutated the variable

const birthYear = 1986;
// birthYear = 1985;
//immutable. use const unless you are sure the variable will need to change. best practice is not changing variables as much as possible

var job = "Teacher";
job = "Programmer";
//var should be avoided, used prior to ES6


//basic operators
const ageEve = 2022 - 1986;
console.log(ageEve);