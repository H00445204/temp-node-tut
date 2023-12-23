//npm - golbal command, comes with node
//npm --version

//install packege as local dependency - use it only in this particular project
//npm i <packageName> //or npm install <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default) //create package.json file with default values

const _ = require('lodash') //lodash is a third party package and it is installed using npm 
const items = [1,[2,[3,[4]]]] //this is a nested array 
items.flat(Infinity) //this will flatten the array
console.log(_.flattenDeep(items)) //this will flatten the array and print it, output : [ 1, 2, 3, 4 ]