//Defining function when the arguments that user gonna pass are not confirmed => Like user can add multiple items in a cart infinitely

//Using rest operator => Spread and rest operator are just same but have difference on the basis of their usecases
function totalCartPrice(...num1){
    return num1;
}
console.log(totalCartPrice(400, 500, 100));//This will return an array of passed price => Output = [400, 500, 100] => Now we can apply loop on this array to add the prices in future

//Adding the cart value using for loop
let myArray = totalCartPrice(400, 500, 100);
let sum = 0;
for(let i = 0; i < myArray.length; i++){
    sum += myArray[i]
}
console.log(sum);//Print the sum of cart


//Defining function in different way
function totalItems(val1, val2, ...num2){
    return num2;
}
console.log(totalItems(200, 300, 400, 500));//This will assign 400 and 500 to num2 => Output = [400, 500]
//200 and 300 are stored to val1 and val2 respectively


//Passing an object in a function
const course = {
    userName : "Shadab",
    courseName : "JS with chai aur code",
    price: "₹199"
}
function handleObject(anyObject){
    return `${anyObject.userName} just started the course "${anyObject.courseName}" and the price is ${anyObject.price}`
}
console.log(handleObject(course));


//Passing an object into function as an argument directly
console.log(handleObject({
    userName: "Jitesh",
    courseName: "Front-end development with chai aur code",
    price: "₹0"
}));

//Passing an array into function as a argument
const newArray = [200, 400, 600, 800, 1000]
function returnThirdValue(anyArray){//Defining a function to return the third value
    return anyArray[3];
}
console.log(returnThirdValue(newArray));//Output = 800

//Passing the object into function as argument directly
console.log(returnThirdValue([1, 3, 5, 7, 9, 11, 13]));


