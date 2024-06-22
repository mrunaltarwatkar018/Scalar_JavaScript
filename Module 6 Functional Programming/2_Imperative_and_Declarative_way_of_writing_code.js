// we will be given a number and we have to check that if the square of that number is even or not

/********************* Imperative Way of Writing Code ************************/

// const a = 5;
const a = 4;

let isEven;
let square = a * a;

if ( square % 2 == 0 ) {
    isEven = true;
} else {
    isEven = false;
}
console.log(isEven);
// output: false   for 5
// output: true   for 4


/********************* Declarative Way of Writing Code ************************/

const checkForSquare = (x) => (x * x % 2 === 0 ? true : false )
console.log(checkForSquare(4))
// output: true
console.log(checkForSquare(5))
// output: false
