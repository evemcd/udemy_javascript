console.log("**********************");
//assignment 1 values and variables
let country = "Ireland";
let continent = "Europe";
let population = 6;

console.log(country);
console.log(continent);
console.log(population);

//assignment 2 data types
const isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

//assignment 3 let, const, var
language = "English";

//assignment 4 basic operators
// console.log(population / 2);
// console.log(population++);
const populationFinland = 6;
console.log(population > populationFinland);
const averagePopulation = 33
console.log(population < averagePopulation);
const description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

//assignment 5 template literals
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description2);

//assignment 6 if else statements
let difference;
if(population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    difference = averagePopulation - population;
    console.log(`${country}'s population is ${difference} million below average.`);
}