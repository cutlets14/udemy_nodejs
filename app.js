const http = require('http');

// Can also use an anonymous function
// http.createServer(function(req, res) {});

// Can also use an arrow function
const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);