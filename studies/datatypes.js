/*
*
*
* Datatypes
*
*
* Datatypes tells the interpreter in JavaScript how we will impliment the data.
*
*
* 1. Number - Numeric Data
*
*
* 2. String - character or texual data within double or single quotes.
*
*
* 3. Boolean - A representation of two values: true or false, ON or OFF, 1 or 0.
* 
*
* 4. array - An array is a zero-indexed list.
* 
*
* 5. object - An object is a collection of key-value pairs.
* 
*
* 6. function - A function allows one to encapsulate a code
* 
*
* 7. undefined - is a primitive datatype returns underfined if theres no
*    value assigned to a variable or variable is hoisted to the top of the 
*    program.
* 
*
* 8. null - is a primitive value that simply means no value.
*
*
* 9. NaN - is a primitive data type that simply means Not a Number.
* 
*
* 10. infinity and -infinity
* 
*
* 11. Diffennce between primitive/simple and complex datatypes.
*     [] 11a. simple/primitive: strings, numbers, booleans, NaN, undefined, null. They are immutable and return new simple values 
*     [] 11b. complex objects: functions, arrays, objects. The hold and collect data and not finite in size.
*
*

* 12. copy by reference vs copy by value
*     [] 12a. copy by value - When a value is stored into a variable then that variable is into another variable, the initail variable is unchanged. See example.
*     [] 12b. copy by reference - When a complex datatype is created then reassigned to a new variable, changing the value of the new variable will effect the particular object. See example
*/

// 1. Number - Numeric Data

var num = 3;
console.log('My daughter is ' + num + 'years old');




// 2. String - character or texual data within double or single quotes.

var person1 = 'John Kuhn';
console.log(person1); // prints "John Kuhn"
//Brackets can be used to access a particular character.
console.log(person1[0]); // prints "J"



// 3. Boolean - A representation of two values: true or false, ON or OFF, 1 or 0.

typeof true;
typeof false;





// 4. Array - An array is a zero-indexed list.
// Below is an array literal:

const myArray = []; // assigning brackets to the variable signifies an array literal. 

// An array can contain multiple datatypes:

const myArray2 = ['monkey', '23 dollars', null, 44, undefined, true];

// I can access the data in an array by using bracket notation.

console.log(myArray2[0]); // prints monkey





// 5. Object - An object is a collection of key-value pairs.
//below is an object literal assigned to a variable..

const myobject = {};

//Use bracket notation or dot notation to access keys, values, or both.

const person = {
    name: "james", //key/value pairs
    home: "Mars",
    age: "1,234"
}

console.log(person['name']); //prints 'james'
console.log(person.home); //prints 'mars'




// 6. function - A function allows one to encapsulate a code
// and reuse it whenever or however we want.

function myFunc(num1, num2) {// Here we set 
//parameters that act as placeholders

return num1 * num2;// Here return the code one wish
//to invoke
    
}

console.log(myFunc(3, 5)); // Here is where we set arguments 
// to call or invoke.





// 7. undefined - is a primitive datatype returns underfined if theres no
// value assigned to a variable or variable is hoisted to the top of the 
// program.

// Here no value is assigned to the variable. 

var simpleCheck;

console.log(simpleCheck); // prints undefined.

// or when one logs to the console before variable is initialized.

console.log(andriodOne);

var andriodOne = 'R2-D2';

// interpreter view 

var androidOne;

console.log(andriodOne);

androidOne ="R2-D2";





// 8. null is a primitive value that simply means no value.

const myNull = null;






// 9. NaN is a primitive data type that simply means Not a Number.

console.log(undefined + 3); // print NaN to the console.


console.log(androidOne * 8); // print NaN to the console.


//10 infinity vs -infinity

//infinity - A value that is representation of infinity.

console.log(Math.pow(10, 1000));

//infinity - A value that is representation of -infinity.
console.log(Math.log(0));



//11 a - b and 12 a - b

// Primitive datatypes won't store or collect data and they are copied by value.

var myDog = 'Snoop';

var myDog2 = myDog; //

myDog2 = 'Bow Wow';

console.log(myDog); // Although myDog was copied into myDog2 when myDog is accessed the value does not change.




//Complex types can hold data in large amounts.
//Complex types are copied by reference.

var myNum = [1, 2, 3];

var myNum2 = myNum;

myNum2[0] = 4; // the value is changed because 0 is a reference to the first value in the array which effects
               // the position of the original value.
              
console.log(myNum);