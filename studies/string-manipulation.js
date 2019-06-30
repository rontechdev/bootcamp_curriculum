/*
*
* 1. String with operator
*    [] 1a. plus operator - Allows one to concat a string with another string.
*    [] 1b. plus equals operator - Allows one to assign a variable that has string to another variable that has string in an 
*           attempt to combine them. 
*
*
* 2. String Method
*    [] 2a. charAt() returns a character at a specified position.
*    [] 2b. concat() joins two or more strings and returns a new joined string.
*    [] 2c. endsWith() checks whether a string ends with a specified string or character.
*    [] 2d. includes() checks whether a string contains a specified string or character.
*    [] 2e. indexOf() returns the position of the first found occurence of a specified value in string
*    [] 2f. lastindexOf() returns the position of the lasf found occurence of a specified value in a string
*    [] 2g. match() returns an array that matches the character use in this method.
*    [] 2h. repeat() returns a new string with a specified number of copies of an existing string.
*    [] 2i. replace() replace searches string for specified value or regular expression and returns a new string where the specified values are.
*    [] 2j. search() seaerch is going search a string for specified balue and regular expression and return the position of the match.
*    [] 2k. slice() slice will extract a part of a string and return a new string.
*    [] 2l. split() split will split the string into an array of substrings.
*         
*
*
*/








// 1. String with operator.

// 1a. plus operator

var myString = 'My name is Colby and ' + 'I like movies';
console.log(myString);



// 1b. plus equals operator 
var myStringTwo = 'Lets run and ';
myStringTwo += 'jump';




// 2. String Methods 


//2a. charAt() 
const myPet = 'Mojo';
console.log(myPet.charAt(0)); // prints M


//2b. concat() 
const stringOne = 'Hello ';
const stringTwo = 'People';
console.log(stringOne.concat(stringTwo)); // prints Hello People.


//2c. endsWith() 
// prints true or false

const string = "It's time to go outside";

console.log(string.endsWith('outside')); // prints true 
console.log(string.endsWith('to')); // prints false



//2d. includes() 

let string1 = 'I will play ukulele';
console.log(string1.includes('play')); // print true 



//2e. indexOf() 
 const devTech = 'frontend and backend development';
 console.log(devTech.indexOf('end')); //prints 5 because 'end' starts at 5 in the first occurence of the string.
 


//2f. lastindexOf() 
 let devTech2 = 'frontend and backend developement';
 console.log(devTech2.lastindexOf('end')); // prints 17 because 'end' starts at 17 in the last occurence of the string.
 
//2g. match() 
 
 const devTech3 = 'frontend and backend developement';
 console.log(devTech3.match(/end/g)) //prints ['end', 'end']
 


//2h. repeat() 
 const devTechy = "I like ice cream";
 console.log(devTechy.repeat(4));// prints I like ice cream 4 times.
 
 
 
 //2i. replace() 
 const myProTech = 'frontend and backend developement';
 console.log(myProTech.replace(/end/g, 'END')); // replaces end with END
 
 
 
 //2j. search() 
 const myProTechy = 'frontend and backend developement';
 console.log(myProTechy.search('end')); // prints 5
 


 //2k. slice() 
 const name = 'Timothy';
 console.log(name.slice(0, 3)); // prints Tim
 
 
 
 //2l. split() 
 const animal = 'Dinosaurs';
 console.log(animal.split('')); // prints each letter separated in the word dinosaur.