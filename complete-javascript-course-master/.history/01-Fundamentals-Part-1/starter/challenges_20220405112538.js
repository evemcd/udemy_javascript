console.log("****************************");
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

const weightMark1 = 78;
const heightMark1 = 1.69;
const weightJohn1 = 92;
const heightJohn1 = 1.95;
const weightMark2 = 95;
const heightMark2 = 1.88;
const weightJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark1 = weightMark1 / (heightMark1 * heightMark1);
console.log(bmiMark1);

const bmiJohn1 = weightJohn1 / (heightJohn1 * heightJohn1);
console.log(bmiJohn1);

const bmiMark2 = weightMark2 / (heightMark2 * heightMark2);
console.log(bmiMark1);

const bmiJohn2 = weightJohn2 / (heightJohn2 * heightJohn2);
console.log(bmiJohn2);

const markHigherBMI1 = bmiMark1 > bmiJohn1;
const markHigherBMI2 = bmiMark2 > bmiJohn2;
