//FS Module is used to read and write files in the system 
// const fs = require('fs') or
// const {readFileSync} = require('fs');
// const {writeFileSync} = require('fs');
//or
const {readFileSync , writeFileSync} = require('fs');  
console.log('start');
//utf8 is used to get the data in the string format
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);
//combine the two files and create a new file   
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first} , ${second}`,
    {flag:'a'} //flag a is used to append the data to the file instead of overwriting the file 

);

console.log('done with this task');
console.log('starting the next one');