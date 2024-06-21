/* 
    The for of statements creates a loop iterating over iterable objects,
    including: built-in sting, Array, array-like objects like NodeList and also map and set
*/



var scores = [60, 90, 80, 75];

for (var score of scores ) {
    console.log(score)
}

/*
    o/p:
        65
        95
        85
        80
*/

for (var score of scores ) {
    score = score + 5;
    console.log(score)
}

/*
    o/p:
        60
        90
        80
        75
*/



// method - entries()
let colors = ['Red', 'White', 'Green'];

for ( var [index, color] of colors.entries()) {
    console.log(index + ' -> ' + color)
}

/*
    o/p:
        0 -> Red
        1 -> White
        2 -> Green
*/


for ( var [index, color] of colors.entries()) {
    console.log(`Index: ${index}, Color: ${color}`);
}

/*
    o/p:
        Index: 0, Color: Red
        Index: 1, Color: White
        Index: 2, Color: Green
*/



// strings
var str = "Mrunal";

for ( var c of str ) {
    console.log(c)
}
/*
    o/p:
        M
        r
        u
        n
        a
        l
*/
