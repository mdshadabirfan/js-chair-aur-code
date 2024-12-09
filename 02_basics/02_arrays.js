const memOfTOP = ["Goku", "Vegeta", "Gohan", "Piccolo", "Krillin", "Tien", "Roshi", "18", "17", "Freeza"];
console.log(memOfTOP, typeof memOfTOP);

//=> Arrays have prototype which further has prototype

/* Merging or Concatenating or Adding to or more Arrays */
const priorVillians = ["Vegeta", "Piccolo", "18", "17", "Freeza"]
const gokuFriends = ["Gohan", "Krillin", "Roshi", "Tien"]
priorVillians.push(gokuFriends);//This will add gokuFriend to the priorVillians array but in the array form
console.log(priorVillians);

//Flat method
const gokuTeam = priorVillians.flat(Infinity);//This will change the multi-dimensionality of priorVillians
console.log(gokuTeam);

//Concatenation
const array1 = [0,1 ,2, 3, 4, 5];
const array2 = [11, 12, 13, 14, 15];
const newArray = array1.concat(array2);//This will concatenate array1 and array2
console.log(newArray);




// Spread Operator
const array3 = [0,1 ,2, 3, 4, 5];
const array4 = [11, 12, 13, 14, 15];
const newArray1 = [...array3, ...array4]//This will concatenate array1 and array2
console.log(newArray);
console.log(Array.isArray(newArray));//This will check whether the given argument is array or not will return boolean 

//Convert into array
console.log(Array.from("Shadab"));
console.log(Array.from({name: "Shadab"}));//If can't be converted then will return an empty object

const score1 = 80;
const score2 = 123;
const score3 = 111;
console.log(Array.of(score1, score2, score3));//This will make a new array from score1, score2 and score3







