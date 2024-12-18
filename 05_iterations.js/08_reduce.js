const myNumbers = [1, 2, 3, 4, 5];
const reducedNumbers = myNumbers.reduce((acc, value) => {
    return (acc + value)
}, 0)
console.log(reducedNumbers);


//Using reduce on objects within an array
const shoppingCart = [
    {course: "JS Hindi", price: 3000},
    {course: "Backend with JS", price: 5000},
    {course: "React with WordPress", price: 2000}
]
const cartTotalPrice = shoppingCart.reduce((acc, course) => {
    return (acc + course.price)
}, 0)
console.log(cartTotalPrice);

