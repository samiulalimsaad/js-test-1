// 1. Create a function that will find the factorial number of [9] using recursion.

const factorial = (number) =>
    number === 1 ? 1 : number * factorial(number - 1);

console.log(factorial(9));
