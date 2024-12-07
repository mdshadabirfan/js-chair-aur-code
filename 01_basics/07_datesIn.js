const date = new Date();
// console.log(date.toString());
// console.log(date.toLocaleString());

// console.log(date.toISOString());
// console.log(date.toTimeString());

const myCreatedDate = new Date("04-06-2019");
const myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000));
console.log(myCreatedDate.getTime());

console.log(`The day is ${date.getDay()} and the time is ${date.getTime()}`);

console.log(date.toLocaleDateString("default", {
    weekday:"short",
    hour:"2-digit"
}));







