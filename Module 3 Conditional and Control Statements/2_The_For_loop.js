// loops are the statements that we can use to control a flow of the program and to do some repeatative task

var a = "Hello World"

// the for loop

for (let i = 0; i < 10; i++) {
    console.log(a)
}



// you have an Array and you have to square each element of that array

var num = [2, 3, 4, 5, 6, 7, 8];

// var firstSquare = num[0] * num[0];
// var secondSquare = num[1] * num[1];
// console.log(firstSquare);
// console.log(secondSquare);

// insted of doing this, we use for loop

var squaredArr = []; // empty array

for (let i = 0; i < num.length; i++) {
    squaredArr.push(num[i]*num[i]);
}
console.log(squaredArr)

// o/p : [ 4,  9, 16, 25, 36, 49, 64 ]