//For in loop on an object
const myObject = {
    js: "JavaScript",
    cpp: "C Plus plus",
    rb: "Ruby",
    swift: "Swift by apple"
}

//printing keys of myObject

for (const key in myObject) {
    console.log(key);
}


//Printing values of myObject
for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
}


//Printing keys of array using For in loop

const myArray = ["js","rb", "py", "java", "cpp"];
for (const key in myArray) {
    console.log(key);//This will print indices of the elements => Output => 0 1 2 3 4 
}

//Printing key value pairs of array with for in loop

for (const key in myArray) {
    console.log(`Value at ${key} is ${myArray[key]}`);
}


//for loop with map object
const countries = new Map();
countries.set("IN", "India")
countries.set("PK", "Pakistan")
countries.set("USA", "United States of America")
countries.set("Fr", "France")
for (const key in countries) {
    console.log(key); //This will not print anything => Map object is not iterable   
}


/* Note:-
1. For of loop will be used on an array
2. For in loop will be used on an object
*/
