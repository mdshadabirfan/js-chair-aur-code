//For of loop is an array specific loop
const myArray = [1, 2, 3, 4, 5];
for (const index of myArray) {
    console.log(index);//Output => 1 2 3 4 5
}

//For of loop with a string
const myString = "Shadab";
for (const index of myString) {
    console.log(index);//Output => S h a d a b
}

//Doing an operation in forof loop
const myArray2 = [5, 6, 7, 8, 9, 10];
for (let index of myArray2) {
    index += 1;
    console.log(index);//Output => 6 7 8 9 10 11
}


//Map
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USA", "United States of America");
myMap.set("Fr", "France");
console.log(myMap);//This will print all myMap's properties in a single object


//Printing key value pairs of map object
for (const key of myMap) {
    console.log(key);//This will print all the key-value pairs in separate arrays
}

//Printing keys only
for (const [key] of myMap) {
    console.log(key);//This will print keys only
}

//Printing values of myMap
for (const [key, value] of myMap) {
    console.log(value);
}

//Printing key-value pairs together with string interpolation
for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}


//For loop on an object
const myObject = {
    game1 : "NFS",
    game2 : "BGMI",
    game3 : "Doctor Driving"
}
for (const [key] of myObject) {
    console.log(key);//This will throw error
}//For of loop can't be used on an object