/*
    The Destructuring assignment syntax is a javascript expression that makes it possible to unpack values
    from arrays, or properties from objects, into distinct variables.
*/

let arr = ['Hi', 'I', , 'am', 'Mrunal'];

// let a = arr[1]
// let b = arr[2]
// console.log(a)
// console.log(b)

/* 
            output:
                    I
                    am
*/


let [a, b, c, d, e] = arr;

console.log(a)
// output: Hi

console.log(c)
// output: undefined