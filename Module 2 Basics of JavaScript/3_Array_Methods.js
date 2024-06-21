// inbuilt js array methods

var arr2 = [12, 14, 56, 57];

// pop method
arr2.pop(); // removes the last element of the array
console.log(arr2); // [12, 14, 56]
console.log('Popped Array: ', arr2); // Popped Array:  [ 12, 14, 56 ]


// push method
arr2.push(58, 59); // adds elements to the end of the array
console.log(arr2); // [12, 14, 56, 58, 59]
console.log('Push Array: ', arr2); // Push Array:  [12, 14, 56, 58, 59]


// shift method
arr2.shift(); // removes the first element of the array
console.log(arr2); // [14, 56, 58, 59]
console.log('Shift Array: ', arr2); // Shift Array:  [14, 56, 58, 59]


// unshift method
arr2.unshift(12, 13); // adds elements to the beginning of the array
console.log(arr2); // [ 12, 13, 14, 56, 58, 59 ]
console.log('Unshift Array: ', arr2); // Unshift Array:  [ 12, 13, 14, 56, 58, 59 ]
