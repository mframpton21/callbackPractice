/* In this repo your job is to write functions to make each function call work properly.

Sample problem: 
//code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the favNum function that makes the code above work, 

Sample solution:

   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   }); 

*/


// PROBLEM 1
//Code Here for first
var first = function(array, callback) {
  callback(array[0]);
};

//Code provided  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



// PROBLEM 2 - NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
//Code Here for last
var last = function(array, callback) {
  callback(array[array.length - 1]);
};

//Code provided
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});



// PROBLEM 3 - NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
//Code Here for multiply
var multiply = function(num1, num2, callback)  {
  callback(num1 * num2);
};

//Code provided
multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
});



// PROBLEM 4 - NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
//Code Here for contains
var contains = function(array, nameToFind, callback) {
  callback(array.indexOf(nameToFind) !== -1);
};

//Code provided
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// PROBLEM 5 - NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
//Code Here for uniq
var uniq = function(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var found = false;
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[j] === array[i]) {
        found = true;
        break;
      }
    }

    if (!found ) {
      newArray.push(array[i]);
    }
  }
  return callback(newArray);
};

//Code provided
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

// OR another solution
var uniq = function(array, callback) {
return callback(array.sort().filter(function(item, pos) {
        return !pos || item != array[pos - 1];
    }))
};

//Code provided
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



// PROBLEM 6 - NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
//Code Here for each
var each = function(array, callback) {
  array.forEach(callback);
};

//Code provided
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

// OR another solution
var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

//Code provided
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// PROBLEM 7 - NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM
//Code here for getUserById
var getUserById = function(array, id, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      callback(array[i])
    }
  }
};

//Code provided
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + 
    user.name + ' and the address of ' + user.address); 
});