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
if(population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average.`);
}

//assignment 7 type coercion
//Predict the result of these 5 operations without executing them:
console.log('9' - '5');                     //4 
console.log('19' - '13' + '17');            //617 
console.log('19' - '13' + 17);              //23 
console.log('123' < 57);                    //false 
console.log(5 + 6 + '4' + 9 - 4 - 2);       //1143 

//assignment 8 equality operators == vs ===
/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if(numNeighbours === 1) {
    console.log("Only 1 border!");
} else if(numNeighbours > 1) {
    console.log("More than 1 border!");
} else {
    console.log("No borders");
}
*/

//assignment 9 logical operators
if(language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria`);
}

//assignment 10 switch statement
