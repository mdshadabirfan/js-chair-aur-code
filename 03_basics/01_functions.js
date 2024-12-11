/* Function => It is a block of code that is used to perform a particular task */
/* Functions are executed or invoked:-
1. When an event happens (user clicks a btn)
2. When it is called
3. Automatically(self invoked functions)
*/

//Printing my name
console.log("S");
console.log("H");
console.log("A");
console.log("D");
console.log("A");
console.log("B");

//Printing my name using function => Used when we have to do some task several times => It will be difficult and ugly code the above consoles again and again
function callMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
    console.log("A");
    console.log("B");
}

callMyName;// We are just referring to our function
callMyName();//We are calling the function

//Multiplying three numbers using a function => Defining a function with 3 numbers as parameters
function productOfThreeNumbers(number1, number2, number3){
    const product = number1 * number2 * number3;//Storing the product in the variable
    console.log(product);   //printing the product
}
productOfThreeNumbers(3, 4, 5);//Calling the function with three numbers as arguments => Output = 3 * 4 * 5 = 60

productOfThreeNumbers();//Calling the function without the arguments => Output = NaN

productOfThreeNumbers(3, 4);//This will also give NaN as we passed only two arguments

//Storing the product into a variable
const product = productOfThreeNumbers(2, 3, 4);//Output = 24
console.log(product);//Output = undefined => Bcoz we haven't returned the product

//Printing the product when it is stored in a variable using return statement
function addThreeNumbers(number4, number5, number6){
    const sumOfThreeNumbers = number4 + number5 + number6;
    return sumOfThreeNumbers;
    console.log("Shadab");//Any code written after return statement will not be executed
    
}
const addedValue = addThreeNumbers(5, 6, 7);//Storing the sum in addedValue variable
console.log(addedValue);//Print the addedValue => Output = 18


//Defining function with return statement while saving some space in the memory => Without storing the result in a variable
function divideTwoNumbers(number4, number5){
   return number4 / number5;//Here we haven't stored the division result in any variable but returning it directly
}
const divisionResult = divideTwoNumbers(100, 5);//Calling the function with arguments and storing the result in divisionResult
console.log(divisionResult);//Printing the divisionResult


//Defining a function using template literals
function isLoggedIn(username){
    return `${username} just logged in!`;
}
isLoggedIn("Shadab");//This will not print anything bcoz neither we consoled anyhting in the function nor we stored the returning value in any variable

console.log(isLoggedIn("Shadab"));//This will print the returning value

//calling function without any argument
console.log(isLoggedIn());//Output => undefined
console.log(isLoggedIn(""));//Empty string is passed as argument => Output = just logged in!

//Defining a function with a default parameter
function isBeginner(username = "Vicky"){
    return `${username} is a beginner!`
}
console.log(isBeginner());//Output = Vicky just logged in!




