const { readFileSync, writeFileSync } = require('fs')

const fist = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// 
writeFileSync('./content/result-sync.txt', `here is the result ${fist},${second}`)