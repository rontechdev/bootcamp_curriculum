/*
*
* 1.Assignment operators - assigns values from the right to the left of the operand.
* 
* 2.Arithmetic operators - allows on to perform arithmetic calculations on values and/or variables.
*
* 3.Comparison operators - based on whether it is true the comparsion operator will return a logical value.
*
* 4.Logical operators - logical values can be used with boolean values or non-boolean values. (!, ||, &&)
* 
* 5.Unary operators (!, typeOf, -) - An operation with only one operand.
* 
* 6.Ternary operator (a ? b : c) An operation performed with three operands and is all used in place of if statement for convienence.
* 
*
*
*
*
*
*
*
*
*
*
*
*/




// 1.Assignment operators

// An assignment operator (=) simply assigns a simple, primitive, or complex data type to a variable like so:

var society = 'the world '; 


society += 'is good';

console.log(society); // --> prints 'the world is good'


var number = 3;

number *= 3; 

console.log(number) // prints 9



var divide = 4;

divide /= 2; 

console.log(divide) // prints 2


var substract = 10;
substract -= 1;

console.log(substract) // prints 9



//2.Arithmetic operators

console.log(5 - 3); //subtration --> prints 2

console.log(4 * 4) //multiplication --> prints 12

console.log(10 / 2); //division --> prints 5

console.log(3 + 3); //addition --> prints 6


console.log(5 % 1); // remainder --> prints 0



//3.Comparison operators
 
 // returns true or false if condition is met.

console.log(4 > 7);//greaterthan --> returns false.
console.log(4 >= 4);//greaterthan or equal to --> prints true
console.log(3 < 10);//lessthan --> returns true 
console.log(3 <= 3);//lessthan or equal to --> returns true 
console.log('2' == 2) // equality operator: returns true 
console.log('2' === 2) // strict equality operator: returns false


// 4.Logical operators

// && returns true if both arguments are true. If one side of the argument is 
//false the entire statement is false.
let number1 = 6;
let number2 = 8;
console.log(number1 === 6 && number2 === 8); // prints true because both side are true.


// ! Not - falsifies a statement.

!true; // returns false
!false; // returns true


// || return true if one side of argument's condition is met. 

let cats = 'are people';
let dogs = 'are people';
console.log(cats === 'are animals' || dogs === 'are animals'); // prints false because both conditions are false.



// 5. Unary operators (!, typeOf, -)

typeof '';  // returns 'string'
typeof 3; // returns the word 'number'
typeof true; // returns 'boolean'

//! // falsifies a condition.
var num1 = 3
var num2 = 2
console.log(!num1 < num2); // prints true 

//delete // deletes an object, property, or element.
var myArr = [1, 3, 4, 5, 6, 5];
delete myArr[3];
console.log(myArr); // prints [1, 3, 4, <1 empty item>, 6, 5] or  [1, 3, 4, , 6, 5 ]


//instanceof // returns true if an object is of a specified type.
 
({}) instanceof Object 
// prints true


// 6.Ternary operator (a ? b : c)

// the ternary operator can be set up in this way:

var topGuitar = 'telecaster';

let faveGuitar = (topGuitar === 'telecaster') ? 'good choice' : 'spend more money';

console.log(faveGuitar); // prints good choice 
