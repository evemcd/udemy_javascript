"use strict";

console.log("**********************************************");

//assignment 1 functions
function describeCountry(country, population, capitalCity) {
    const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryInfo;
}

const infoIreland = describeCountry("Ireland", 6, "Dublin");
const infoGermany = describeCountry("Germany", 82, "Berlin");
const infoPortugal = describeCountry("Portugal", 10, "Lisbon");
console.log(infoIreland, infoGermany, infoPortugal);

//assignment 2 function declarations vs expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100
}
const percentageIreland = percentageOfWorld1(6);
const percentageGermany = percentageOfWorld1(82);
const percentagePortugal = percentageOfWorld1(10);