// Declaring singleton objects using constructor
const tinderUser = new Object();//Create a new object

//Creating key-value pairs in object tinderUser after making it
tinderUser.id = "30" //
tinderUser.name = "Shadab";
tinderUser.isLoggedIn = false;
tinderUser.mySymbol = "checked"
console.log(tinderUser["id"]); //Print the id of the user
console.log(tinderUser["name"]); //Print the name of the user
console.log(tinderUser["isLoggedIn"]); //Print the isLoggedIn of the user


//Multi-dimensional object => Creating objects in objects
const newtinderUser = {
    fullName : { //Here full name is an object
        userFullName : { //Here userFullName is also an object
            firstName : "Bob",
            middleName : "Mel",
            lastName : "Lee"
        }
    },
    email : "bml@support.com"
}
console.log(newtinderUser["fullName"]);//Print the whole fullName object => Element of the newTinderUser

console.log(newtinderUser["fullName"]["userFullName"]);//Print the whole userFullName that is an object that is an element of fullName object => I am accessign the element userFullName that is stored in fullName that is stored in newTinderUser

console.log(newtinderUser["fullName"]["userFullName"]["middleName"]);//Accessing the element middleName of the object userFullName that is an object of fullName that is an element of newTinderUser


//Object Concatenation
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {11: "x", 12: "y", 13: "z"}
const obj3 = {obj1, obj2};//Will add obj1 and obj2 and store the sum in obj3
console.log(obj3);//Will print the obj3 => Will encounter the same problem => Create obj3 containing the obj1 and obj2 as the elements of obj3

//Better method to concatenate 2 or more objects
const obj4 = Object.assign(obj1, obj2);//Will concatenate obj1 and obj2 and store the sum in obj1
console.log(obj4);//Will return the concatenated obj4
console.log(obj4 === obj1); // Will return true


//Another syntax to concatenate them =>
const obj5 = Object.assign({}, obj1, obj2)//Will add obj1 and obj2 and put that sum in {} and it will be stored in obj5
console.log(obj5);//Will return obj5 than contains the sum of obj1 and obj2



//Spread Operator => Same as array => Will add different objects using ...
const obj6 = {...obj1, ...obj2}
console.log(obj6, typeof obj6);//Will return the added objects and typeof obj6

//Array containing objects
const users = [ //Declaring an array containing two objects
    {email: "ssd@gmail.com", id: 2, location: "Delhi"},
    {email: "hdd@gmail.com", id: 230, location: "Pune"}
]
console.log(users[0]);//Accessing the 1st object of array users
console.log(users[0]["email"]);//Accessing the email id of first element of first object of users


//Accessing the key and values of any object
console.log(Object.keys(tinderUser)); //=> Very interesting and useful for future => Will return the keys of tinderUser in the form of an array

console.log(Object.values(tinderUser)); //=> Very interesting and useful for future => Will return the values of tinderUser in the form of an array

//Enteries
console.log(Object.entries(tinderUser));
//=> Will return an array with the each element having key-value pair in the form of an array

//Questioning the array =>This will ask whether the passed object has specified key or not
console.log(tinderUser.hasOwnProperty("email"));//Checking whether tinderUser has email property or not => Will return boolean
console.log(tinderUser.hasOwnProperty("id"));//Checking whether tinderUser has id property or not => Will return boolean
















