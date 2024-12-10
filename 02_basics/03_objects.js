// ---Object can hold any type of Data-----

//Singleton => object.create =>This will create a singleton object

//Object literal => Object can hold any type of Data
const mySymbol = Symbol("symbolKey");//Declaring a symbol => Symbol must be declared outside of the object
const userDetails ={
    name: "Shadab", //all keys are stored in the form of string
    email: "shadab@yahoo.com",
    age: 35,
    location: "Japan",
    "college name": "Harvard University",
    isLoggedIn: true,
    lastLoginDays: ["Sunday", "Monday"],
    [mySymbol]: "checked" //Symbol can't be declared inside the object although can be initialised in it
}
console.log(userDetails);//This will print the whole object userDetails

/*Accessing the object */
console.log(userDetails.age);//Accessing like this includes just dot and the key
console.log(userDetails["location"]);//Accessing like this include ["keyName"]

console.log(userDetails["college name"]);//This is better method than dot access

console.log(userDetails[mySymbol]);//This will print mySymbol

/* Values overwriting */
userDetails.email = "shadab@dragon_ball.com";//This will overwrite the existing email id
console.log(userDetails["email"]);

/* Value Freezing */
// Object.freeze(userDetails);//This will freeze the object
// userDetails.email = "shadab@pokemon.com"//Email will not updated as the object is freezed
// console.log(userDetails);//This will print the original object although we have tried to change the email

//Creating a new key value pair in object userDetails
userDetails.isBeginner = true;
console.log(userDetails);

//Creating a function adding it to the object as a key-value pair
userDetails.greeting = function(){
    return `Hello JS user, ${this["name"]}`; //We can use this keyword to access the object=> THIS is referring to the userDetails object 
}
console.log(userDetails["greeting"]);//This will print function (anonymous)=> The function is reference not executed

console.log(userDetails.greeting());//This will execute the function stored in greeting key





