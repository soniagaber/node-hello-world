const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
    res.writeHead
    res.end("<h1>Hello World!</h1>");
})

server.listen(port, function (){
    console.log("server is running on port:" + port)
})