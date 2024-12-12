// //Nested scope
function one (){
    const username = "Shadab";

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);//This will throw error as website can't be accessed outside of scope
    two(); ///This will execute function two() and print Shadab
}
one();

//Exploring scopes with conditionals
if (true){
    const username = "Shadab";

    if(username == "Shadab"){
        const website = " Youtube";
        console.log(username + website);//Output = Shadab Youtube
    }
    console.log(website);  //This will throw error as we are trying to access website outside of the scope 
}
    console.log(username); //This will aslo throw errors as we are trying to access username outside of the scope

//Ordinary function VS Function expression

//Ordinary function =>
console.log(addOne(10));//We can use ordinary function before creating them => Hoisting applied here

function addOne(value){
    return value + 1;

}
addOne(10); //Just returns the value but not printed the result


//Function Expression
console.log(volumeOfCuboid(3, 4, 5));//This will throw error as we can use function expression before creating them => Hoisting is not applied here
const volumeOfCuboid = function(length, breadth, height){
    return length * breadth * height;
}
console.log(volumeOfCuboid(3, 4, 5));//Output = 60


