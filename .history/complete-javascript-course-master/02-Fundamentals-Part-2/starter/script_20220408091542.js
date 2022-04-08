//strict mode
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;                   //strict mode finds the error
if(hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";                              //using a reserved word
const private = 534;                                    //reserved word
*/


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

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1986);
console.log(age1);
//parameter is the placeholder in the function, argument is the actual value when the function is called
