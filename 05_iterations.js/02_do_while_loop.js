let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index++;
}

//Using while loop with an array
let dcHeros = ["Batman", "Superman", "Wonder Woman"];
let indexOfHeros = 0;
while (indexOfHeros < dcHeros.length) {
    console.log(dcHeros[indexOfHeros]);
    indexOfHeros++;
}

//do while loop
let score = 1;
do {
    console.log(`My score is ${score}`);
    score = score + 1;
} while (score <= 10);

//do-while loop works atleast one time with do-part
let score2 = 11;
do {
    console.log(`I can score atleast ${score2} points`);
    score2 = score2 + 1
} while (score2 <= 10);