/*
    Modules and Modularity in JavaScript
    
    Modules:
    A module is a file that contains a collection of related code. In JavaScript, a module is
    typically a single file that exports specific variables, functions, or classes that can be
    used by other parts of the application.

    Modularity:
    Modularity is the practice of breaking down a large program into smaller, independent
    modules that can be developed, tested, and maintained separately. This approach makes it
    easier to manage complexity, reduce coupling, and improve code reuse.

*/



// we call the function while inclduing the another file in current file like a C++ header file

const calculator = require ('./9_calcy')

calculator.addition(2, 3);
calculator.subtraction(5, 2);
calculator.multiplication(5, 2);
calculator.division(10,2);


/*
    Output:
            5
            3
            10
            5

*/