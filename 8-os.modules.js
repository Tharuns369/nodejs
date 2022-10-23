// const names = require('./4-names')
// console.log(names)
// // sayHi("tharun")
// // sayHi(priya)
// // sayHi(sai)
const os = require('os')

const user = os.userInfo()
{
    console.log(user)
}
//os uptime method is the time during which a computer is operational.

console.log(`this computer uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)