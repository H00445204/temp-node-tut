//FS Module is used to read and write files in the system 
const {readFile , writeFile} = require('fs')
//callback function is used to get the data from the file -- we run the callback function after when we done with the task
//utf8 is used to get the data in the string format without it the data will be in the buffer format
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    //If there is an error while reading the file then the error will be stored in the err variable
    if(err){
        console.log(err)
        return
    }
    console.log(result)//output: Hello this is the first text file
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first} , ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                //console.log(result)
                console.log('done with this task');
            }
        )
    })
})
console.log('starting the next one');