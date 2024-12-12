//Arrow function was introduced in ES6 in 2015
//This keyword can be used in objects only not in functions
const userDetails = {
    name: "Shadab",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.name}, welcome to the course `);//This is used for current context that is userDetails object here
        return;
    }
}
console.log(userDetails.welcomeMessage());//Output = Shadab, welcome to the course

//Reinitialising the property and changing the context for this keyword
userDetails.name = "Sam";
console.log(userDetails.welcomeMessage());//Output = Sam, welcome to the course

//Printing this keyword only
console.log(this);//This will print an empty object in node but will print the window object in the console

//Printing this keyword in a function in node
function printThis(){
    printerName: "Back to pavillion";
    console.log(this);//This will print so many values
    console.log(this.printerName);//This will print undefined as we are usign this keyword in a function
    
}
printThis();

//Function expression also work like classic function when printing this keyword


//Arrow function
const chaiMaking = () => {
    let ingredients = ["paani", "patti", "doodh", "cheeni"];
    console.log(ingredients);
}
chaiMaking();


//More about arrow functions
const volumeOfCuboid = (l, b, h) => {
    return l * b * h;
}
console.log(volumeOfCuboid(2, 3, 10));//This will print the volume of the cuboid


//Implicit returning function => without return statement and the curly braces
const areaOfRectable = (length, breadth) => (length * breadth);
console.log(areaOfRectable(4, 5));

//Write return keyword if wrapping in curly braces
//Don't write return keyword if wrapping in paratheses

//Returning an object
const printObject = () => {username: "Shadab"};
console.log(printObject());//Output = undefined

const printObject2 = () => ({username: "Shadab"})//Wrap the returning object in paratheses to print it
console.log(printObject2());


