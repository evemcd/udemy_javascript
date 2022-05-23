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

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push('Jay');                          //adds an element to the end of the array. push is a method
console.log(friends);
console.log(newLength);

friends.unshift('John');                                        //adds John to the beginning of the array
console.log(friends);

friends.pop();                                                  //removes the last element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();                                                //removes first element
console.log(friends);

console.log(friends.indexOf('Steven'));                         //returns the index of 'Steven'
console.log(friends.includes('Steven'));                        //returns boolean value if it includes the element 'Steven'. works with strict comparison, no type coersion

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.');
} else {
    console.log("You don't have a friend called Peter");
}


//Introduction to Objects
//arrays for ordered data, objects for more unstructured data that is named with the keys

const eveArray = [                  //array
    'Eve',
    'McDermott',
    2022 - 1986,
    'programmer',
    ['Andrea', 'Tanja', 'Kiri']
];

const eve = {                       //object
    firstName: 'Eve',               //key: value
    lastName: 'McDermott',
    age: 2022 - 1986,
    job: 'programmer',
    friends: ['Andrea', 'Tanja', 'Kiri']    //this object has 5 properties
};


//Dot vs Bracket Notation
const eve = {
    firstName: 'Eve',
    lastName: 'McDermott',
    age: 2022 - 1986,
    job: 'programmer',
    friends: ['Tanja', 'Andrea', 'Kiri']
};

console.log(eve);
console.log(eve.lastName);          //the dot . is an operator which goes to the object eve and retrieves the value from the lastName-key
console.log(eve['lastName']);

const nameKey = 'Name';
console.log(eve['first' + nameKey]);        //retrieves firstName
console.log(eve['last' + nameKey]);

//if we need to compute the property name we use bracket notation. in any other case dot notation can be used

const interestedIn = prompt('What do you want to know about Eve? Choose between firstName, lastName, age, job, and friends');
console.log(eve.interestedIn);              //undefined - object doesn't exist, property intertestedIn doesn't exist
console.log(eve[interestedIn]);             //replaces "interestedIn" with the actual value of the variable

if(eve[interestedIn]) {
    console.log(eve[interestedIn]);         //triggers a truthy value
} else {
    console.log('Wrong request. Choose between firstName, lastName, age, job, and friends.');
}

//add properties with dot and bracket notation
eve.location = 'Germany';
eve['favourite food'] = 'cheese';
console.log(eve);

//challenge
//"Eve has 3 friends and her best friend is called Tanja"
console.log(eve.firstName + ' has ' + eve.friends.length + ' friends and her best friend is called ' + eve.friends[0]);
console.log(`${eve.firstName} has ${eve.friends.length} friends and her best friend is called ${eve.friends[0]}.`);
*/


//Object Methods
//a function is a value

const eve = {
    firstName: 'Eve',
    lastName: 'McDermott',
    birthYear: 1986,
    job: 'programmer',
    friends: ['Tanja', 'Andrea', 'Kiri'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {              //function expression, inside an object is called a method
    //     return 2022 - birthYear
    // }

    calcAge: function () {
        console.log(this);                      //this refers to the object itself, this whole object will be logged
        return 2022 - this.birthYear
    }
};

console.log(eve.calcAge());

// console.log(eve['calcAge'](1986));
