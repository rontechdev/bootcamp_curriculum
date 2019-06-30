/*
*
*
* Functions - function allows one to generate code within the code block and execute 
*   that block of code.
*
* 1. Function Declartion - consist of parameters and return statement.
*    []1a. The call our function by invoking it. We use function name and parenthesis.
*
*
*
* 2. Named functions are functions with names. named functions are hoisted to the top which allows the function to execute before 
*    it is declared. Named functions are hoisted to the top which allows the function to execute before 
*   it is declared.
*      [] 2a. Name function are hoisted to the top of the program.
*
*
* 3. Function expression - We can assign functions to variables by setting the function name as a variable.
*
*
* 4. function closures - functions in javascript form closures. That is, the evironment where code exist between the 
* the curly brackets to be executed.
*
*
* 5. functions scope - variable can be accessed outside the function. See example.
*
*
*
*
*
*/





/////////////////////functions//////////////////////////
////////////////functions/////////////////functions//////////////
////////////functions//////////////////////////functions/////


//  1. Function declaration.

// One can declare a function like so:

function multiply(digitOne, digitTwo){ // The function is given a name and two parameters (or placeholders) to input arguments 
    
    return digitOne * digitTwo; // Here we return the implemented code within the curly brackets or code block. 
    
}


// 1a. Invoking a function 

// One can call, execute, or invoke the function like so:

function divide(integerOne, integerTwo) {
    
    return integerOne / integerTwo; 
}

divide(10, 2); // here one can set arguments to be 'Passed' to the function.

// Arguments need to be set in the order of the placeholders(or parameters).




//2. Named functions



//Here's the syntax for a NAMED function:

function printString(weirdString) {
    
    return weirdString;
}


// 2a. named functions are hoisted to the top which allows the function to execute before 
// it is declared.


console.log(printString('the oddest string'));
function printString(oddString) {
    return oddString;
}

// interpreter view

function printString(oddString) {
    return oddString;
}

console.log(printString('the oddest string'));




// 3. functions that are assigned to variables are called function expression.

//One can assign a function to variable like so:

const pets = function(dog, cat) {
    return dog.toUpperCase() + " " + cat.toUpperCase();
}

console.log(pets('roger', 'mojo'));




// 5. function closures 

function name(person) {
    return function name2(otherPerson) { // child scope can access information in parent scope but not the other way around.
        return person + " " + otherPerson;
    }
}

name('donald')('clark');


// 6. function scope

// function can access variables from the global scope 

let person = 'Jim';

function person1(){
    return "hello " + person;
}

person1();