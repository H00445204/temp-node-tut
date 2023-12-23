//module - info about current module (file)
//spilt your code into multiple files and run one file
//common js, every file in node is module (by default)
//modules - encapsulated code (only share minimum)

//to access the values in 4-firstModuleNames.js use require
const names = require('./4-firstModuleNames')
const sayHi = require('./5-utils')
// console.log(names)//output: { jhon: 'jhon', peter: 'peter' }

const data = require('./6-alternative-flavor')
// console.log(data)//output: [ 'item1', 'item2' ]
require('./7-mind-grenade')//output: 10
// sayHi('susan')    
// sayHi(names.jhon)
// sayHi(names.peter)