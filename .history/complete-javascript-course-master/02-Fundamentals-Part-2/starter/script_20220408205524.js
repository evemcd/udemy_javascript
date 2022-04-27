//strict mode
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;                   //strict mode finds the error
if(hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";                              //using a reserved word
const private = 534;                                    //reserved word


//functions
//reusable piece of code
function logger() {
    console.log("My name is Eve");
}

//calling / running / invoking function
logger();

function fruitProcessor(apples,  oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//function declarations vs expressions
//parameter is the placeholder in the function, argument is the actual value when the function is called
//function declaration - can be called before they're defined in the code
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1986);

//function expression (anonymous function) - functions are values and can be stored in a variable
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1986);
console.log(age1, age2);


//arrow functions (function expression, also value)
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1986);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1986, "Eve"));
console.log(yearsUntilRetirement(1962, "Olaf"));


//functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,  oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}

console.log(fruitProcessor(2, 3));


//reviewing functions

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;                                  //return exits the funtion so clg has to come first
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1986, "Eve"));
console.log(yearsUntilRetirement(1940, "Helga"));
*/


//introduction to arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const dates = new Array(1991, 1986, 2008, 2020);        //different way of creating an array with array function

console.log(friends[0]);                                //logs the first element in the array
console.log(friends[2]);
console.log(friends.length);                            //logs the amount of elements in the array
console.log(friends[friends.length - 1]);               //gets the last element in the array

friends[2] = "Jay";                                     //replacing element at index 2
console.log(friends);

const firstName = "Eve"
const eve = [firstName, "McDermott", 2022 - 1986, friends];     //different kinds of elements can go into an array
console.log(eve);
console.log(eve.length);

//exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[0]));