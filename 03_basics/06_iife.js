// Immediately Invoked Function Expressios (IIFE)

//Can be used to connect database as soon as our application starts


/* Reasons to use IIFE
1. We don't want to create the problems for the function => Global variables shouldn't make problems for the function
2. To execute the function immediately */

//Syntax for IIFE => Define a function in parentheses and put () at the end
(function sayMyName(){ //This is Named IIFE
    console.log("Shadab");//Print Shadab
})(); //Parentheses at the end

//Arrow IIFE
(() => { //This is just IIFE
    console.log("Chai aur Code");   
})();
console.log("My name is Shadab");


//Note => Always put semi-colon after first IIFE otherwise code below it will not work

//Passing argument with IIFE
((name, mathsMarks) => {
    console.log(`${name}'s marks in maths is ${mathsMarks}`);
   
})("Shadab", 60);//Output = Shadab's marks in maths is 60 
