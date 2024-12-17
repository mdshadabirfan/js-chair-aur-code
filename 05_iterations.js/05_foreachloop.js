const programmingLanguages = ["js", "ruby", "java","python","cpp"];
programmingLanguages.forEach(function (language){//Unnamed function
    console.log(language);
    
})

//Arrow function with forEach loop
programmingLanguages.forEach((language) => {
    console.log(language);
    
})

//Passing a function in forEach loop
function printMe (language){
    console.log(language);
}

programmingLanguages.forEach(printMe)//Only pass reference of the function


//Access of more parameters to forEach loop
programmingLanguages.forEach(function (language, index, programmingLanguages){
    console.log(language, index, programmingLanguages);
    
})


//Objects in array with forEach loop
const myProgrammingLanguages = [
    {
        languageName: "JavaScript",
        fileExtension: ".js"
    },
    {
        languageName: "Python",
        fileExtension: ".py"
    },
    {
        languageName: "Java",
        fileExtension: ".java"
    }
]
myProgrammingLanguages.forEach((language) => {
    console.log(language.languageName);//This access and print the languages in every object in the array
})
