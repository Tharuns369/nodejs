const EventEmitter = require('events')

const customEmitter = new EventEmitter

customEmitter.on('response', (name, id) => {
    console.log(`data recieved ${name} and his ${id}`)
})

customEmitter.on('response', () => {
    console.log('hello tharun')
})

customEmitter.emit('response', 'tharun', 369)