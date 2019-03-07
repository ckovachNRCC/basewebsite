const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");