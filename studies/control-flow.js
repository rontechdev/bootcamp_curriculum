/*
*
* 
* CONTROL FLOW
*
* When we control the flow of our application, we ask true or false questions. In
* an created application, a code is ran in a code block if the condition is true or
* false. We can determine what condition is met by using if-elseif-else or switch statments 
*
*
*
*
* 
*
* 1. if - statement determines whether a condtion is true or false.
*     a condition is placed inside the parenthesis then the code runs which lives
*     inside the curly brackets.
*
*
* 2. else if - Conditional statements can be chained together adding else if.
*
*
* 3. else - is used as a default when coditions from code above it are not met.
*
*
* 4. Switch - Just like if-elseif-else statement, switch statements can determine
*    whether a block of code is true or not.
*    Switch statements come in handy when we want to write cleaner code. That is,
*    readability.
*
*/




// 1.  if statement 

// if statement is structured in this way..

var condition = 'true';

if (condition) {
 // code prints to the console   
}



//We can test an if statment here:

let dog = 'Jack';

if (dog === 'Jack') {
    
    console.log(dog);
}

// If condition is not met, code will not print.

let cat = 'Mojo';

if (cat === 'Soren') {
    
    console.log(cat);
}








// 2. else if



// Conditional statements can be chained together adding else if.

let age = 31;
let name = 'Jim';

if (age < 25 && name === 'Jim') {
    console.log('data is incorrect')

} else if (age > 31 && name === 'Tim') {
    console.log('information processing error') 
    
} else if (age <= 31 && name !== "Josh" ) {
    console.log("We've found a close match");
}

//if chained conditional statements using else-if are not met, code will not print.

const carColor = 'Grey';
const carMake = 'Toyota';

if(carColor === 'Red' && carMake === 'tesla') {
    console.log('I wish');
} else if (carColor === 'black' && carMake === 'Audi R8') {
    console.log('In my dreams');
} else if (carColor === 'Grey' && carMake === 'prius') {
    console.log('The universe hates me');
} 






// 3. else 


var philosophers = 'love to be reasonable';
var scientists = 'love to fact check';

if (philosophers === 'are unreasonable' && scientists === 'are dogmatists') {
    console.log('we live in a parallel universe');
} else if (philosophers === 'bad thinkers' && scientists === 'have no emotion' ) {
    console.log('we are screwed');
} else {
    console.log('All is right in the universe');
}






// 4. switch

let favGuitarist = 'Johnny Greenwood';

switch (favGuitarist) {
    case 'Josh Homme': // case clause determines the output if matches the condition.
        console.log('No, but he is talented')
        break; // break is important because it ends the case. if it is not included it will run the next black of code.
    case 'Jimi Hendrix':
        console.log('No, but a very close')
        break;
        case 'Johnny Greenwood':
        console.log("Yes, art rock at it's best")
        break;
        default: // Similar to else statement, it will run code if conditions aren't met in code above it.
}





