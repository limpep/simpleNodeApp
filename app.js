console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes')


// console.log(_.isString(true));
// console.log(_.isString('Ergun'));

var filteredArray = _.uniq(['Ergun',1, 'Ergun',1,2,3,4]);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);

// var res = notes.add(1,2);
// console.log(res);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
