/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object.
var animal = {};
//console.log(animal);
//Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = 'Cat';
//console.log(animal);
// [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal['name'] = 'Jim';
//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Create a variable named `noises` and assign it to an empty array.
var noises = [];
//Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = 'meow';
//Using an array function add another noise to the end of `noises`.
noises.push('purr');
noises.unshift('screech');
noises.push('pur pur');
noises.push('meow meow');
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal.noises = noises;
console.log(noises);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
//`push` our `animal` that we created to `animals`.
animals.push(animal);
console.log(animals);
//Create a variable called `duck` and assign it to the data:
 // - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 var duck = {
     species: 'duck',
     name: 'Jersome',
     noises: ['quack', 'honk', 'sneeze', 'woosh'],
     friends: ['people', 'people2', 'people3']
 };
 
 var cow = {
     species: 'cow',
     name: 'Rob',
     noises: ['mooo', 'mooo moo', 'moo moo moo', 'moo moo moo moo']
 };
 
 var frog = {};
 frog.species = 'frog';
 frog.name = 'Jon';
 frog.noises = ['hello my baby', 'croke', 'rbiitt'];
 
 animals.push(duck, cow, frog);
 

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Choose a data structure for this **list** of friends.
//Write a comment in your code that explains why you chose this data structure.

// I'm choosing an array data structure because of the many methods I use to manipulate data.
var friends = [];
// Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element using `Math.random`
//  6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
//  7. [ ] `console.log` `friends`.
//  8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
//  9. [ ] `console.log` your work.
 function getRandom(animals) {
     
     return Math.floor(Math.random() * animals.length);
 }
 
 //console.log(getRandom(friends))
 
 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
