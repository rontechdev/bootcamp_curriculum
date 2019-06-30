// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lowdown-newtonr12');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */


 var maleCount = function(array) {
  return _.filter(array, function(customer) {
   return customer.gender === 'male';
  }).length;
 };
 

var femaleCount = function(array) {
 return _.reduce(array, function (acc, element) {
  if(element.gender === 'female') {
   return acc + 1;
  } else {
   return acc;
  }
 }, 0)
};

var oldestCustomer = function(array) {
 return _.reduce(array, function (acc, customer) {
  
  if(acc.age > customer.age) {
   return acc;
  } else {
   return customer;
  }
 }).name
};


var youngestCustomer = function(array) {
 return _.reduce(array, function (acc, customer){
  if(acc.age < customer.age) {
   return acc;
  } else {
   return customer;
  }
 }).name
};


var averageBalance = function (array) {
 return _.reduce(array, function(accum, element, index) {
  if(element.balance) {
   return accum + parseFloat(element.balance.replace(/[$-,]/g, ""));
  }else{
   return accum;
  }
 }, 0) / array.length;
};

var firstLetterCount = function(array, alph) {
 return _.reduce(array, function(accum, element, index) {
  if(element.name[0].toLowerCase() == alph.toLowerCase())
{
 return accum + 1;
} else {
 return accum;
}
  
 }, 0);
};

var friendFirstLetterCount = function(array, customer, alph) {
 let customerObj;
 _.each(array, function(person, index, array) {
  if(person.name.toLowerCase() === customer.toLowerCase()) {
   customerObj = person;
  }
 })
 return _.reduce(customerObj.friends, function(count, friend, index){
  if (friend.name[0].toLowerCase() === alph.toLowerCase()) {
   return count + 1;
  } else {
   return count;
  }
 }, 0);
}


var friendsCount = function(array, friend) {
 return _.reduce(array, function(result, person, index) {
  if(_.contains(_.pluck(person.friends, 'name'), friend)) {
   result.push(person.name);
  }
  return result;
 }, []);
}

var topThreeTags = function(array) {
 let tagCount = _.reduce(array, function(countObj, person, index) {
  _.each(person.tags, function(tag, ind, tagArray) {
   if(countObj.hasOwnProperty(tag)) {
    countObj[tag] = countObj[tag] + 1;
   } else {
    countObj[tag] = 1;
   }
  })
  return countObj;
 },{})
 let triArray = _.map(tagCount, function(count, tag) {
  return [tag, count];
 })
 let sortArray = triArray.sort(function(x, y) {
  return y[1] - x[1];
 })
 let topThree = [];
 topThree.push(sortArray[0][0]);
 topThree.push(sortArray[1][0]);
 topThree.push(sortArray[2][0]);
 return topThree;
};

var genderCount = function(array) {
 return _.reduce(array,(accum, x, index) => {
  if(!accum.male) {
   accum.male = 0;
  }
  if(!accum.female) {
   accum.female = 0;
  }
  if(!accum.transgender) {
   accum.transgender = 0;
  }
  if(x.gender === 'male') {
   accum.male++;
  } else if (x.gender === 'female') {
   accum.female++;
  } else {
   accum.transgender++
  }
  return accum;
 }, {});
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
