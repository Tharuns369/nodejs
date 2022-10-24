const { write } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    //req incoming request from the user
    //response (res) is what we sending back
    if (req.url === '/') {
        res.end("welcome to our home page")
    }
    if (req.url === '/about') {
        res.end("here is some short history")
    }
    res.end(`
    <h1>Ooops</h1>
    <p>we can't find to seem the page that are you looking for</p>
    <a href="/">back home </a>`)


})
server.listen(5000)