/*
    In Js, the for-in loop allows you to loop through the properties of an object.
    The statements of code found within the loop body will be executes=d once for each property of the object.
    
    The syntax is: for (var prop in obj) {
        // code to be executed
    }
*/



var colors = {
    primary: 'Blue',
    secondary: 'Red',
    tertiary: 'White'
};

for (const color in colors) {
    console.log(colors[color])
}

/*
    o/p:
        Blue
        Red
        White
*/

for (const color in colors) {
    console.log(color + ' -> ' + colors[color])
}

/*
    o/p:
        primary -> Blue
        secondary -> Red
        tertiary -> White
*/




var colorsArray = ['Yellow', 'Green', 'Orange', 'Violet'];

for (const color in colorsArray) {
    console.log(colorsArray[color])
}

/*
    o/p:
        Yellow
        Green
        Orange
        Violet
*/

for (const color in colorsArray) {
    console.log(color + ' -> ' + colorsArray[color])
}

/*
    o/p:
        0 -> Yellow
        1 -> Green
        2 -> Orange
        3 -> Violet
*/