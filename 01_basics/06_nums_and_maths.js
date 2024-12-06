const score = 300;
console.log(score);

/* ---- Another method of declaring a Number ----=> console will print the newScore as an object */
const newScore = new Number(501);
console.log(newScore);

/* Converting number to string using toString method => This conversion will help you use string methods on a number */
console.log(newScore.toString()); //This line will convert newScore to a String

console.log(newScore.toString().length); //This line will give the length of the newScore

console.log(newScore.toString().charAt(0)); //This line will give you the character that is at 0 index

console.log(newScore.toString().indexOf("5")); //This line will give you the index of 5

console.log(newScore.toFixed(3)); //This line will give you the newScore with upto 3 decimal points => parameter given as 3 => Mostly used on the E-commerce websites so that the customer doesn't get irritated because of so many decimals


// ****** Some other methods ******
const balance = 24.467;
console.log(balance.toPrecision(3)); //This line will give the precised value of the balance upto 3 digits. => Preference is given to whole part first

const newBalance = 100000;
console.log(newBalance.toLocaleString()); //This line will separate the newBalance with commas => Separates according to International system by default

console.log(newBalance.toLocaleString('en-IN')); //This line separates the newBalance using commas according to Indian system => Specified as a parameter to LocaleString method

const maxNumber = Number.MAX_VALUE;
console.log(maxNumber);//Returns the max possible number that can be stored in JS => Value greater than this number is considered as infinity ∞ 

const minNumber = Number.MIN_VALUE;
console.log(minNumber); //Return the min possible number that can be stored in JS => Numbers smaller than this is converted to 0

/* Maths */

console.log(Math);//This line will give you all the maths method

console.log(Math.abs(-5));// This line will change negative to positive and positive will remain same

console.log(Math.round(5.5)); //This line will round of the number

console.log(Math.ceil(5.2));//This line will round up the number

console.log(Math.floor(7.8));//This line will round down the number

console.log(Math.max(1, 2, 3, 5));//This line will give the max value from the array

console.log(Math.min(1, 2, 3, 5));// This line will give the min value from the array


/* Using Math.random method properly */
const max = 150;
const min = 100
console.log(Math.floor(Math.random()  * (max - min + 1)) + min);// This will give a random number ranging from 100 - 150



