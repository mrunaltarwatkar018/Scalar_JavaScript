// let a = 2;

// let test1 = function() {
//     console.log(1)
// }

// let test2 = function(a) {
//     console.log(a + 2)
// }

// let test3 = function(a, b) {
//     console.log(a + b)
// }

// test1()
// test2(4)
// test3(2, 3)

/* 
    output: 
        1
        6
        5
*/




// In Arrow Function 

/* 
    Synatx of arrow function:
    let functionName = (parameters) => { code to be executed }
    
*/


// way 1

// let test1 = () => {
//     console.log(1)
// }

// let test2 = (a) => {
//     console.log(a + 2)
// }

// let test3 = (a, b) => {
//     console.log(a + b)
// }

// test1()
// test2(4)
// test3(2, 3)

/* 
    output: 
        1
        6
        5
*/


// way 2

// let test1 = () => {
//     console.log(1)
// }

// let test2 = a => {
//     console.log(a + 2)
// }

// let test3 = (a, b) => {
//     console.log(a + b)
// }

// test1()
// test2(4)
// test3(2, 3)

/* 
    output: 
        1
        6
        5
*/




// way 3

let test1 = () => console.log(1)


let test2 = a => console.log(a + 2)


let test3 = (a, b) => console.log(a + b)


test1()
test2(4)
test3(2, 3)

/* 
    output: 
        1
        6
        5
*/