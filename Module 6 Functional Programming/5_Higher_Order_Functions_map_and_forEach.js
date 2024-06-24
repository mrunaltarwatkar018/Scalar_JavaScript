/*
    What is Higher Order Function?

        Higher Order Functions are functions that operate on other functions,
        either by taking them as arguments or by returing them. In simple words,
        A Higher Order Function is a function that receives a function as an 
        argument or returns the function as output.
*/

// let arr = [1, 2, 3, 4, 5];

// let squareArr = []

// for (let i = 0; i < arr.length; i++) {
//     squareArr.push(arr[i] * arr[i]);
// }
// console.log(squareArr);
// output: [ 1, 4, 9, 16, 25 ]



// above function using  map

// Map will loop through every element of your array and will perform specific operations that you have provided
// Map method will always return you a new array with your results

// const num = [1, 2, 3, 4, 5];

// const squaredNum = num.map(function(n) {
//     return n * n;
// })
// console.log(squaredNum);
// output: [ 1, 4, 9, 16, 25 ]


// otherwise you can use as following way

// const square = num.map((x) => x * x);
// console.log(square); // output: [ 1, 4, 9, 16, 25 ]


const transactions = [1000, 3000, 4000, 2000, -896, 3800, -4500];
const inrtDollar = 80;

let transactionsInDollars = transactions.map((amount) => {
    // return amount / inrtDollar;
    // return (amount / inrtDollar);
    return (amount / inrtDollar).toFixed(0);
});
// console.log(transactionsInDollars);
// output: [ '13',  '38', '50',  '25', '-11', '48', '-56 ]




// forEach

let transactionsInDollars1 = transactions.forEach((amount) => {
    // return amount / inrtDollar;
    return (amount / inrtDollar).toFixed(0);
});

console.log(transactionsInDollars1);
// output: undefined


let transactionsInDollars2 = transactions.forEach((amount) => {
    // return amount / inrtDollar;
    console.log((amount / inrtDollar).toFixed(0));
});
// output: 13, 38, 50, 25, -11, 48, -56