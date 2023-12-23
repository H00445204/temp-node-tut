//Path module is used to handle and transform file paths.
const path = require('path')
console.log(path.sep)//output: \

//join method is used to join the paths together and it will return a normalized path string   
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)//output: \content\subfolder\test.txt

//basename method is used to get the base file name from the path
const base = path.basename(filePath)
console.log(base)//output: test.txt

//resolve method is used to get the absolute path of a file or folder from the current directory 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt') 
console.log(absolute)//output: C:\Users\user\Desktop\Node.js\content\subfolder\test.txt
