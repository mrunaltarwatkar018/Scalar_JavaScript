// Destructuring an Objects


let myObj = {
    name: "John",
    age: 30,
    gender: 'M',
}

// let {a, b, c} = myObj;
// console.log(a, b, c); 
// output:  undefined undefined undefined

// let {name, age, gender} = myObj;
// console.log(name);
// console.log(age);
// console.log(gender);

/*
    Object:
        John
        30
        M
*/



// let {name: n, age, gender} = myObj;
// console.log(n);
// console.log(age);
// console.log(gender);
/*
    Object:
        John
        30
        M
*/



// let {name: n, age: a, gender: g} = myObj;
// console.log(n);
// console.log(a);
// console.log(g);
/*
    Object:
        John
        30
        M
*/



let myObj1 = {
    name: "John",
    age: 30,
    gender: 'M',

    address : {
        country : 'England',
        city : 'London',
    }
}


// let {name: n, age: a, gender: g, address} = myObj;
// console.log(n);
// console.log(a);
// console.log(g);
// console.log(address)
/*
    Object:
        John
        30
        M
        undefined
*/


let {name: n, age: a, gender: g, address:{country : c}} = myObj;
console.log(n);
console.log(a);
console.log(g);
console.log(c)
/*
    Object:
        John
        30
        M
        undefined
*/
