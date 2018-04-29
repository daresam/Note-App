console.log('Started app.');

const fs = require('fs');
const os = require('os');

user = os.userInfo();

fs.appendFile('message.txt', `Hello  ${user.username}`, (err) => {
    if (err) 
        throw err;
    console.log('success');
});