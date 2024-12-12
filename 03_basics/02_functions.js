//Defining function when the arguments that user gonna pass are not confirmed => Like user can add multiple items in a cart infinitely

//Using rest operator => Spread and rest operator are just same but have difference on the basis of their usecases
function totalCartPrice(...num1){
    return num1;
}
console.log(totalCartPrice(400, 500, 100));//This will return an array of passed price => Output = [400, 500, 100] => Now we can apply loop on this array to add the prices in future

//Defining function in different way
function totalItems(val1, val2, ...num2){
    return num2;
}
console.log(totalItems(200, 300, 400, 500));//This will assign 400 and 500 to num2 => Output = [400, 500]
//200 and 300 are stored to val1 and val2 respectively

