//Array
const memOfTOP = ["Goku", "Vegeta", "Gohan", "Piccolo", "Krillin", "Tien", "Roshi", "18", "17", "Freeza"];
console.log(memOfTOP[0]);

/*Array Methods */
memOfTOP.push("Majin Boo");
console.log(memOfTOP);//Will add one more element at the end named Majin Boo

memOfTOP.pop();
console.log(memOfTOP);//Will remove last element from the array


memOfTOP.unshift("Chi-Chi");//Will add Chi-chi at the start
console.log(memOfTOP, memOfTOP.length); //This will print the array and length of it.

memOfTOP.shift();//Will remove the first element of the array
console.log(memOfTOP, memOfTOP.length);


/*Array questions */
console.log(memOfTOP.includes("Roshi"));//This will check whether the element Roshi present in the array and return boolean as a result
console.log(memOfTOP.includes("Shenron"));
console.log(memOfTOP.indexOf("18"));//This will give the index of element 18 in the array

/* Concatenation */
const newMem = memOfTOP.join();//This will join the original array and store it in newMem and the type will be string
console.log(newMem);

/* Slice and splice */
const first5Mem = memOfTOP.slice(0, 5);//This will make a new array storing the sliced part of the original array. Original array doesn't get changed
console.log(first5Mem);

const powerfullTeamPart1 = memOfTOP.splice(0, 5);//This will cut the original array indexing 0 - 5 and store it in powerfullTeamPart1
const powerfullTeamPart2 = memOfTOP//This will store the remaining portion of the original array
console.log(powerfullTeamPart1, powerfullTeamPart2);//This will print both modified arrays





