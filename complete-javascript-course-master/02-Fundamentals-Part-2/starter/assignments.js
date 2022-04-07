"use strict";

console.log("**********************************************");

function describeCountry(country, population, capitalCity) {
    const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryInfo;
}

const infoIreland = describeCountry("Ireland", 6, "Dublin");
const infoGermany = describeCountry("Germany", 82, "Berlin");
const infoPortugal = describeCountry("Portugal", 10, "Lisbon");
console.log(infoIreland, infoGermany, infoPortugal);