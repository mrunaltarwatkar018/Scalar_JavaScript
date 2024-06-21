// if-else statements

// var myScore = 92;

// if ( myScore > 90 ) {
//     console.log("You got an Bicycle0!");
// } else {
//     console.log("Oops didn't get it this time");
// }













// else-if statements

/*
    90 to 100 - A
    70 to 89 - B
    50 to 69 - C
    lower than 50 - F
*/


var studentScore = 95;

if ( studentScore > 90 ) {
    console.log("Student has Scored an A");
}

else if ( studentScore >= 70 && studentScore <= 89 ) {
    console.log("Student has Scored a B");
}

else if ( studentScore >= 50 && studentScore <= 69  ) {
    console.log("Student has Scored a C");
}

else {
    console.log("Student has Scored an F");
}