// var a = 21;
// console.log(a);
// output: 21

// issue 1
// var a = 21;
// console.log(a);
// var a = 35;    // re-declaration of variable
// console.log(a)

// output: 21
// output: 35

// issue 2
// if (a === 35) {
//     var b = 40;
//     console.log(b)
// }

// output: 40



// issue 2
var a = 35
if (a === 35) {
    var b = 40;
    console.log(b)
}
// the variables declared with var keyword are not blocked scoped they are function scoped
console.log(b);
// output: 40
// output: 40



function test() {
    var c = 100;
    console.log(c)
}
test();
console.log(c)
// output: 100
// ReferenceError: c is not defined
// because c is function scoped and not accessible outside the function test()
