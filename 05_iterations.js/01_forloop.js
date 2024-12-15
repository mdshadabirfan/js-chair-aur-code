//Print 1-10 numbers
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

//console.log(index); => This will throw error as we are trying to access index outside of the block


//Condititionals with for loop
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("5 is the best number");       
    }
    console.log(i);
}

//Nested for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value is ${j} and outer loop value is ${i}`);
    }
}

//Outer loop will run 1 time and then inner loop 10 times

//Printing 0-10 multiplication tables
for (let i = 0; i <= 10; i++) {
    console.log(`Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        const product = i * j;
        console.log(`${i} * ${j} is ${product}`);
    }
}

//Applying for loop with array
let dcHeros  = ["Batman", "Superman", "Wonder Woman"];
for (let index = 0; index < dcHeros.length; index++) {
    console.log(dcHeros[index]);
    
}

//Break and continue => Used when we have to stop a loop midway => Like showing 5 products on each page of ecommerce website => Pagination
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break; //This will stop the iteration when index = 5 is detected
    }
    console.log(`Value of i is ${index}`);
}

//Continue => When we have to forgive one time. It will skip the code that is written below that only one time
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}