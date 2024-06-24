/*
    What is a Callback Function?

        In Js, a callback function is a function that is passed 
        into another function as an argument. This function can 
        then be invoked at a later stage of time.
        Since, in JS, functions are objects, functions can be 
        passed as arguments.
    
    
*/
// Example 1: Simple Callback Function

// function printFirstName(firstname) {
//     console.log(firstname);
// }
// printFirstName('Steve');
// output: Steve


// function printLastName(lastname) {
//     console.log(lastname);
// }
// printLastName('Jobs');
// output: Jobs


// function printFirstName(firstname, cd) {
//     console.log(firstname);
//     cd('Rogers')
// }
// printFirstName('Steve', printLastName);
// // output: Steve
// // output: Rogers


// function printLastName(lastname) {
//     console.log(lastname);
// }
// printLastName('Jobs');
// printFirstName('Steve', printLastName);




//

const isEven = (n) => {
    return n % 2 === 0;
}


const isOdd = (n) => {
    return n % 2 !== 0;
}


let printResult = (evenFunction, num) => {
    const isNumEven = evenFunction(num);
    console.log(`The number ${num} is an Even Number ${isNumEven}`);
}
printResult(isEven, 16);
// output: The number 16 is an Even Number true
printResult(isEven, 17);
// output: The number 16 is an Even Number false






let printResultt = (oddFunction, num) => {
    const isNumOdd = oddFunction(num);
    console.log(`The number ${num} is an Odd Number ${isNumOdd}`);
}
printResultt(isOdd, 16);
// output: The number 16 is an Odd Number false
printResultt(isOdd, 17);
// output: The number 16 is an Odd Number true
