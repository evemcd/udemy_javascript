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
logger();

function fruitProcessor(apples,  oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);