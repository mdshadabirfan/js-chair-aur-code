//Using map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mappedNumbers = myNumbers.map((nums) => {
    return (nums + 10)
})
console.log(mappedNumbers);


//Loop Chaining

const chainedMapNumbers = myNumbers
        .map((num) => num * 10)
        .map((num) => num + 5)
        .filter((num) => num > 60);
console.log(chainedMapNumbers);


