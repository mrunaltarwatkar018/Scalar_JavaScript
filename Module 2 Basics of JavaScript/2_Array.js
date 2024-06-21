// Arrays provides you an ordered collection of data

var arr = [12, 'Ferrari', true, 12.4]
console.log(arr);   // o/p: [ 12, 'Ferrari', true, 12.4 ]

// accessing the elements
console.log(arr[0]);    // o/p:   12
console.log(arr[1]);    // o/p: Ferrari
console.log(arr[2]);    // o/p: true
console.log(arr[3]);    // o/p: 12.4
console.log(arr[4]);    // o/p: undefined


// replacing elements of an array by using index
arr[1] = 'Ben 10';
console.log(arr);   // o/p: [ 12, 'Ben 10', true, 12.4 ]

console.log(arr.length); // o/p: 4