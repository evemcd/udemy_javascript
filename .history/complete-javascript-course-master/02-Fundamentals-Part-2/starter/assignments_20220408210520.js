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
    return population / 7900 * 100;
}
const percentageIreland = percentageOfWorld1(6);
const percentageGermany = percentageOfWorld1(82);
const percentagePortugal = percentageOfWorld1(10);
console.log(percentageIreland, percentageGermany, percentagePortugal);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const percentageIreland1 = percentageOfWorld2(6);
const percentageGermany1 = percentageOfWorld2(82);
const percentagePortugal1 = percentageOfWorld2(10);
console.log(percentageIreland1, percentageGermany1, percentagePortugal1);

//assignment 3 arrow functions
const percentageOfWorld3 = population => population / 7900 * 100;
const percentageIreland2 = percentageOfWorld3(6);
const percentageGermany2 = percentageOfWorld3(82);
const percentagePortugal2 = percentageOfWorld3(10);
console.log(percentageIreland1, percentageGermany1, percentagePortugal1);

//assignment 4 functions calling other functions
const describePopulation = function (country, population) {
    const percentageCountry = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentageCountry}% of the world.`;
}
console.log(describePopulation("Ireland", 6));
console.log(describePopulation("Germany", 82));
console.log(describePopulation("Portugal", 10));


//assignment 5 introduction to arrays
const populations = [6, 82, 10, 1441];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);