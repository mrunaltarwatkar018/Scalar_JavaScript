/*
    Pure Functions and Side Effects

    What is Pure Functions ?

        A pure function is a function which:
            1. Given the same inputs, always returns the same output.
            2. Has/Produces no side effects.
            3. Does not depend on any external state.

    


*/


// pure function

// var a = 4
// function add(x) {
//     console.log(x+a)
// }
// add(2)
// // output: 6


// var a = 10
// function add(x) {
//     console.log(x+a)
// }
// add(2)
// // output: 12




// impured function
// var a = 2
// function addImpure(x) {
//     console.log(x+a)
//     a++;
// }
// addImpure(2)
// addImpure(2)
// addImpure(2)
/*
    Output:
        4
        5
        6
*/

// in above, we can not get same value



// Pure Function

// function addPure(x, a) {
//     console.log(x+a)
// }
// addPure(2, 3)
/*
    Output: 5
*/



// function addPure(x, a) {
//     console.log(x+a)
// }
// addPure(2, 3)
// addPure(2, 3)
// addPure(2, 3)
// addPure(2, 3)
// addPure(2, 3)
/*
    Output: 5
            5
            5
            5
            5
*/
// Given the same inputs, always returns the same output.




function addPure(x, a) {
    return x+a
}

console.log(addPure(4, 5))
// output: 9

/*
    In the above addPure(), all there conditions are satisfied
    1. Given the same inputs, always returns the same output.
    2. No side effects.
    3. No dependency on external state.
*/