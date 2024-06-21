// in jS, Objects are in key value pair

var person = {
    firstName: "Adam",
    lastName: "Smith",
    age: 30,
    ownsCar: false
}


// console.log(person) // o/p: { firstName: 'Adam', lastName: 'Smith', age: 30, ownsCar: false }


// // dot notation
// console.log(person.firstName) // o/p: Adam
// console.log(person.lastName) // o/p: Smith
// console.log(person.age) // o/p: 30
// console.log(person.ownsCar) // o/p: false

// // bracket notation
// console.log(person["firstName"]) // o/p: Adam
// console.log(person["lastName"]) // o/p: Smith
// console.log(person["age"]) // o/p: 30
// console.log(person["ownsCar"]) // o/p: false



var cap = {
    firstName: 'Steve',
    lastName: 'Rogers',
    age: 102,

    friends : ['Bucky Barnes', 'Bruce Banner', 'Tony Stark'],

    isAvenger: true,

    address : {
        state: 'New York',
        city : {
            name: 'Brooklyn',
            pincode : 123456
        }
    }
}

console.log(cap.friends[1]);  // o/p: Bruce Banner
console.log(cap.address.city.name); // o/p: Brooklyn

console.log(cap.address.city.name); // o/p: Brooklyn



cap.isAvenger = false;

console.log(cap)
// {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     age: 102,
//     friends: [ 'Bucky Barnes', 'Bruce Banner', 'Tony Stark' ],
//     isAvenger: false,
//     address: { state: 'New York', city: { name: 'Brooklyn', pincode: 123456 } }
//  }


cap.movies = ['age of ultron', 'civil war', 'first avenger'];
console.log(cap);
// {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     age: 102,
//     friends: [ 'Bucky Barnes', 'Bruce Banner', 'Tony Stark' ],
//     isAvenger: false,
//     address: { state: 'New York', city: { name: 'Brooklyn', pincode: 123456 } },
//     movies: [ 'age of ultron', 'civil war', 'first avenger' ]
//  }


delete cap.age;
console.log(cap);

// {
//     firstName: 'Steve',
//     lastName: 'Rogers',
//     friends: [ 'Bucky Barnes', 'Bruce Banner', 'Tony Stark' ],
//     isAvenger: false,
//     address: { state: 'New York', city: { name: 'Brooklyn', pincode: 123456 } },
//     movies: [ 'age of ultron', 'civil war', 'first avenger' ]
//  }