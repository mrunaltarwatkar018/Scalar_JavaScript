/*************** let *******************/

// var a = 20;
// let b = 30;
// console.log(a);
// console.log(b);

// output: 20
// output: 30



// Solution of the Redeclaration Problem
// var a = 20;
// var a = 35;
// let b = 30;
// let b = 45;
// console.log(a);
// console.log(b);

// output: 35
// output: 30
// var allows re-declaration, let does not.
// var a = 35; re-declares the variable a, whereas let b =
// 45; throws an error because it's trying to re-declare the variable b.
// In the case of let, it's a syntax error to re-declare the same variable in
// the same scope.



// issue 2
// if (true) {
//     var c = 40;
//     console.log(c)
// }
// the variables declared with var keyword are not blocked scoped they are function scoped
// console.log(c);

// output: 40
// output: 40



// if (true) {
//     let c = 40;
//     console.log(c)
// }
// the variables declared with let keyword are blocked scoped
// console.log(c);

// output: 40
// output: ReferenceError: c is not defined
// let and const are block scoped, they are not accessible outside the block they are declared in.
// var is function scoped, it is accessible outside the block it is declared in.
// In the case of let, it's a ReferenceError to access the variable outside the block it
// is declared in.
// In the case of var, it's accessible outside the block it is declared in.







/*************** Const *******************/


// issue 3
// const d = 50;
// d = 60; // TypeError: Assignment to constant variable.
// console.log(d);
// output: TypeError: Assignment to constant variable.
// const variables are immutable, they cannot be reassigned once they are declared.
// If you try to reassign a const variable, it will throw a TypeError.
// const variables are block scoped, they are not accessible outside the block they are declared in.



/*
Key Points;

keyword     |   Redeclaration   |   Reassignment    |   Scoping     |
    var     |       Yes         |       Yes         |   function    |
    let     |       No          |       Yes         |   Block       |
    const   |       No          |       No          |   Block       |

*/