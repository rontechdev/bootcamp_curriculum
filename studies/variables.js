/*
*
* 0. Variables allow one to store information in memory. This by using keyword followed by
* name to indentify stored information. One can store datatypes such as Numbers, arrays,
* booleans, objects, and functions. There are two stages of using variables: declaration and intialization.
*
*
*
* 1. Declaration - is a statement that has not been initailized.
*
*
*
* 2. Initialization - We can initialized variables by assigning it a value.
*
*
* 3. Reassignment - We can reassign a variable by using previously created 
* variable then giving it different value.
*
*
* 4. Using the var keyword allows one to reassign. They are also hoisted and scoped to functions.
* However, they are not scoped to if blocks and loop blocks. Examples are given from 4a to 4d.
*   [] 4a. hoisting - var is hoisted to the top of the program but throws error. See example
*   [] 4b. scope to functions - var is scope to functions  See example
*   [] 4c. if blocks - var is not scoped to if blocks. That is, they can be accessed.  See example
*   [] 4d. loops blocks - var is not scoped to loop blocks. That is, they can be accessed. See example
*
*
* 5. Using the let keyword allows one to reassign. They are hoisted but throws an error when logged before
* the varaible is initalized or declared. let is scoped to functions, if blocks, and loop blocks.
*   [] 5a. Reassignment - let can be reassinged. See example
*   [] 5b. hoisting - let is hoisted to the top of the program but throws error. See example
*   [] 5c. scope to functions - let is scope to functions. See example
*   [] 5d. if blocks - let is scope to if blocks. See example
*   [] 5e. loops blocks - let is scope to loops blocks. See example
*
* 6. When using the const keyword it throw error when reassignment is attempted or when const is hoisted.
* const is scoped to functions, if blocks, and loop blocks.
*   [] 6a. Reassignment - const can not be reassinged. Throw type error. See example
*   [] 6b. hoisting - const is hoisted to the top of the program but throws error. See example
*   [] 6c. scope to functions - const is scope to functions. That is, they can not be accessed. See example
*   [] 6d. if blocks - const is scope to if blocks. That is, They can not be accessed. See example
*   [] 6e. loops blocks -
*
*
*'
*
*
*
*
*'
*
*/

//////////////////////var//////////////////////////
////////////////var/////////////////var//////////////
////////////var//////////////////////////var/////


//1. Declaration 

var myDec; 

console.log(myDec); // when logged to the console, it will print undefined.

//2. Assignment (or initialization)

var myInt = 4;

console.log(myInt);

//3. Reassignment 

var dog = 'Dom';

dog = 'Max'; // New value assigned.

console.log(dog);



// 4a. hoisting

// when let is logged to the console before declaration or intialization, variables are hoisted to the top of the program.

// my view
console.log(myDesk);
var myDesk = 'coffee table';

// the interpreter 

var myDesk;
console.log(myDesk);
myDesk = 'coffee table';

//4b. scope to function

function myfunc() {
    
    var x = "year 2230"
}

//console.log(x); // throw reference error. Can not be accessed in a function block.


// 4c. not scope to if blocks. That is, var variable can be accessed.

var accessibility = true;

if (accessibility) {
   
    var y = 5;
}
console.log(y); // var can be accessed.


// 4d. not scope to loops

for(var index = 0; index < 10; index++) {
    
    var specialK = 120;
}

console.log(specialK); // can be accessed.


//////////////////////let//////////////////////////
////////////////let/////////////////let//////////////
////////////let//////////////////////////let/////
 
 
// 5a. let reassignment 

// let can be reassigned 

let myShoe = 'Nike';
myShoe = 'addias'
console.log(myShoe);





// 5b. let hoisting 

// when let is logged to the console before declaration or intialization, it throws reference error.

//console.log(myHome);
let myHome = 'Mars';

// throw reference error 

//interpreter view:

// let myHome;

// console.log(myHome);

// myHome = 'Mars'; 



// 5c. let is scope to functions

function myfunc2() {
    let chemical = 'hydrogen'
}

//console.log(chemical);





// 5d. let is scope to if blocks
 
 let spaceship = 'b-15';
 if (spaceship) {
     
     let spaceship2 = 'b-1039301';
 }
 
 //console.log(spaceship2); -- can not be accessed.
 
 
 
// 5e. let is scope to loops 

let galacticName = 'sandDrift martian';
for(let index = 0; index < galacticName.length; index++) {
    let sandstones = "fined grained";
}
//console.log(sandstones); can not be accessed in the loop block








//////////////////////constants//////////////////////////
////////////////constants/////////////////constants//////////////
////////////constants//////////////////////////constants/////


// 6a. reassignment 

// const can not be reassigned

const myGame = 'legend of zelda';
//myGame = 'mario';
console.log(myGame); //throws type error 



// 6b. hoisting 

// when const is logged to the console before declaration or intialization, it throws reference error.

//console.log(mySong);
const mySong = 'switchblade' // throw reference error


// interpretor view:

// const mySong;

// console.log(mySong);

// mySong = 'switchblade';

// throws sytax error because it's missing initializer.





// 6c. scope to function 

function myFunc () {
    
    const alienFishFound = 'mars pond';
}

//console.log(alienFishFound); // mars pond can not be accessed.


// 6d. scope to if block 

const alienDogFound = 'icy belt';

if(true) {
    const icyRock = 'cold';
}

//console.log(icyRock); // cold can not be accessed 



// 6e. scope to loop block
const journey = 'lightYears'
for(var index = 0; index < journey.length; index++) {
    
    const lightYears = 'long journey';
}

//console.log(lightYears); // long journey can not be accessed in the loop block