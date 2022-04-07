let js = "amazing";
console.log(40 + 8 + 23 - 10);

//value is a piece of data (string)
console.log("Eve");
console.log(36);

let name = "Eve";
console.log(name);

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
const now = 2022;
const ageEve = now - 1986;
const ageCharlie = now - 2017;
console.log(ageEve, ageCharlie);
console.log(ageEve * 2, ageEve / 2, 2 ** 3);
//2 ** 3 = 2 to the power of 3 = 2 * 2 * 2

const firstName = "Eve";
const lastName = "McDermott";
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;     //15
x += 10;            // x = x + 10 = 25
x *= 4;             // x = x * 4 = 100
x++;                // x = x + 1
x--;                // x = x - 1
console.log(x);

//comparison operators
console.log(ageEve > ageCharlie);       //true or false, >, <, >=, <=
console.log(ageEve >= 18);
const isFullAge = ageEve >= 18;

console.log(now - 1986 > now - 2017);


//operator precedence
console.log(25 - 10 - 5);               //left to right

let y, z;                               //two variables declared at once
y = z = 25 - 10 - 5;                    //starts with maths operator left to right: x = y = 10. assignment operators work right to left: y = 10, x = 10
console.log(x, y);

const averageAge = (ageEve + ageCharlie) / 2;   //without the () the division would happen before addition
console.log(ageEve, ageCharlie, averageAge);


//strings and template literals
const eve = "I'm " + firstName + ", a " + (now - birthYear) + " year-old " + job + "!";
console.log(eve);

const eveNew = `I'm ${firstName}, a ${now - birthYear} year-old ${job}!`;
console.log(eveNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);



//if else statements
const agePerson = 13;

if(agePerson >= 18) {
    console.log("You can start driving lessons");
} else {
    const yearsLeft = 18 - agePerson;
    console.log(`You're too young. Wait another ${yearsLeft} years.`);
}

const birthYear1 = 2012;
let century;                    //needs to be defined outside the if statement to be accessible outside of it
if(birthYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//type conversion
const inputYear = '1986';
console.log(inputYear + 18);            //console shows 198618
console.log(Number(inputYear));         //variable still contains a string but console shows a number
console.log(Number(inputYear) + 18);    //console shows 2009
console.log(Number('Eve'));             //NaN (typeof shows number so it's an invalid number)
console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old');       //string + number + string, output is string thanks to coercion
console.log('23' - '10' - 3);                   //strings are converted to numbers
console.log('23' + '10' + 3);                   //number to string, concatonation
console.log('23' * '2');                        //strings to numbers


//thruthy and falsy values
//5 falsy values: 0, '', undefined, null, NaN - are false when converted to boolean
//everything else is truthy

console.log(Boolean(0));                        //false
console.log(Boolean(undefined));                //false
console.log(Boolean("Eve"));                    //true
console.log(Boolean({}));                       //empty object true
console.log(Boolean(''));                       //false

const money = 0;
if(money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job.");       //console will show this as 0 is a falsy value
}

let height;
if(height) {
    console.log("Yay! Height is defined");
} else {
console.log("Height is undefined");             //height is undefined and falsy
}


//equality operators == vs ===
const age1 = 18;
if(age === 18) console.log("You just became an adult :D");
//=== is strict, doesn't perform type coercion. 18 === 18
//== is loose, does perform type coercion. "18" == 18 and 18 == 18

/*
const favourite = Number(prompt("What's your favourite number?"));  //otherwise it's a string
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if(favourite === 7) {
    console.log("7 is also a cool number.");
} else {
    console.log("Number is not 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");    //not equal (strict)
*/


//boolean logic
/*
AND: true when all variables are true
OR: true when at least one variable is true
*/