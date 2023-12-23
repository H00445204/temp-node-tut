//OS moudle is built in module used to get the information about the operating system
const os = require('os')    

//info about current user -- userinfo() is a function in OS Module
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = { 
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)