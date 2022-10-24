const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
    res.end("hello tharun")
})
server.listen(5000, () => {
    console.log('server is running at 5000 port.....')
})
