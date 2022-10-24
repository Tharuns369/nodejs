// const _ = require('lodash')
// const items = [1, [2, [5, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("jack")
// console.log("hgffcgkjghf")
const { readFile, writeFile } = require('fs')
console.log("started a first task")

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log("first task completed")

})
console.log("starting next task")
