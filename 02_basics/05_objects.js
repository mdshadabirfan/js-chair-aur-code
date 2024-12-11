//Destructuring => Arrays and Objects both can be destructured
const course = {
    courseName: "JS in Hindi with Chai aur Code",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}

console.log(course["courseInstructor"]);//Print the courseInstructor of the object

/* Destructuring */
const {courseInstructor} = course;
console.log(courseInstructor);//Print the courseInstructor without talking about the object

/* Renaming the property */
const {courseInstructor: instructor} = course;//This will rename the courseInstructor property as instructor only
console.log(instructor);//Print the instructor

/* API => Application Programming Interface => Values coming from the backend in the form of JSON(JavaScript Object Notation) => Similar as an Object without any name */
//Unlike objects, properties in API should also be in double quotes
{
    "name" : "Shadab,"
    "couserName": "JS with chai aur code",
    "price": 999
}

/* API in the form of Array => API can be an Array */
[
    {},
    {},
]

