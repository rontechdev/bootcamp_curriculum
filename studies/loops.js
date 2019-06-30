
/*
*
*
* loops are features of JaveScript that executes a block of code multiple times. 
* We can use a for, for-in, or while loop.
*
* 1. forLoops - Takes in 3 parts: a start condition, a stop condition, and increment(or decrement).
*   [] 1a. array loop - looping over an array allows one to loop the entire array or array elements. See examples
*   [] 1b. backwards array loop - looping backwards over an array allows one to loop the entire array or array elements in reverse order. See examples
*   
*
* 2. for-in Loops - Using for in loops allows one loop over in object. One can print an 
*    object's keys, values, or key-value pairs. See Examples
*
* 3. while loops - will execute a statement in a loop if and only if the condition is true.
*     before the statement is executed, the condition is evaluated.
*
*
*
*
*/









/////////////////////loops//////////////////////////
////////////////loops/////////////////loops//////////////
////////////loops//////////////////////////loops/////



// loops are features of JaveScript that executes a block of code multiple times. 
// We can use a for, for-in, or while loop.



/////////////////////forloops//////////////////////////
////////////////forloops/////////////////forloops//////////////
////////////forloops//////////////////////////forloops/////


// 1. for loops.

// for loops have 3 parts to its system.

 /*start condition*//*stop condtion*//*increment*/
for(var index = 1; index <= 25; index++) {
    console.log(index);
}


//1a. looping over an array

const thisArray = ['tim', 2 , true, '3 little pigs'];

for(var index = 0; index < thisArray.length; index++){
    console.log(thisArray[index]);
}


//1b. looping over an array backwards


const thatArray = ['Sam Harris', '3 satellites', 'Ex Machina', 'Scott Pilgrim vs The World'];

for(var index = thatArray.length - 1; index > -1; index--) {
    console.log(thatArray[index]);
}

/////////////////////for-inloops//////////////////////////
////////////////for-inloops/////////////////for-inloops//////////////
////////////for-inloops//////////////////////////for-inloops/////


//2. for-in Loops

// heres how one can loop over in object:

var quarterBack = {
    'name': 'Tom Brady',
    'number': 12,
    'rings': 6,
    'team': 'Patriots'
}
for(var key in quarterBack) {
    //console.log(quarterBack[key]); // prints each value
    //console.log(quarterBack); // prints key value pairs 4 times which is the amount of the key-value pairs.
    console.log(key); // prints object's keys 
}



/////////////////////whileloops//////////////////////////
////////////////whileloops/////////////////whileloops//////////////
////////////whileloops//////////////////////////whileloops/////

// 3. while loops

let execute = 1

while(execute < 15) { // conditon
    console.log(execute); // statement block --> the console prints each value 1 - 14 in single line.
    execute++; // setting the increment avoids crashing.
}

