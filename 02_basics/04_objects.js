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




