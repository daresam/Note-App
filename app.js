console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('Drey'));

const filteredArray = _.uniq([1,3,3,2,2,4,6,6]);
console.log(filteredArray);

// const res  = notes.add(2, 3);
// console.log(res);

// user = os.userInfo();

// fs.appendFile('message.txt', `Hello  ${user.username}! You are ${notes.age}`, (err) => {
//     if (err) 
//         throw err;
//     console.log('success');
// });