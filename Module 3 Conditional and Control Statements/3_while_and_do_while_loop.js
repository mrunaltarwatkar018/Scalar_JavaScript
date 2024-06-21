/*
    A while loop evaluates the condition inside the parenthesis ().
    If the condition evaluates to true, the code inside the while loop is executed/
    The condition is evaluated again.
    This process continues until the condition is false.
    When the condition evaluates to false, the loop stops.
*/



// while loop 

// we have to print 1 to 0 with using while loop

var i = 1;

while ( i <= 10 ) {
    console.log(i);
    i++;
}



// do while loop

var i = 5;
var n = 10;
do {
    console.log(i);
    i++;
} while ( i <= n );