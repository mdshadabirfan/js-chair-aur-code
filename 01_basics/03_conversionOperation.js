let score = "33";

console.log(typeof score);
console.log(typeof (score));

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);

//conversion in Numbers
// "33" => 33 => Number
// "33abc" => NaN => Number
// undefined => NaN => Number
// null => 0 => Number
//true => 1 and false => 0 => Number

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//Converion to Boolean
// 0 => False
// Natural Numbers => True
// "" => False
// null => False
// undefined => False
// "Shadab" => True

let someNumber = false;
let stringSomeNumber = String(someNumber);
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

//Conversion to String
// 33 => String => 3
// undefined => String => undefined
// null => String => null
// true => String => true
// false => String => false



