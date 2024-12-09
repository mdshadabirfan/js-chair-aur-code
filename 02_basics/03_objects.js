//Singleton => object.create

//Object literal => Object can hold any type of Data
const mySymbol = Symbol();//Declaring a symbol => Symbol must be declared outside of the object
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
console.log(userDetails.age);//Accessing like this includes just dot and key
console.log(userDetails["location"]);//Accessing like this include ["anyKey"]

console.log(userDetails["college name"]);//This is better method than dot access

console.log(userDetails[mySymbol]);//This will print mySymbol

/* Values overwriting */
userDetails.email = "shadab@dragon_ball.com";//This will overwrite the existing email id
console.log(userDetails["email"]);

/* Value Freezing */
Object.freeze(userDetails);
userDetails.email = "shadab@pokemon.com"
console.log(userDetails);




