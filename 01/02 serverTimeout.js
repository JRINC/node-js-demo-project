var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200);
    response.write("Tobby is running.")
    
    setTimeout(function() {
        response.write("Tobby is done.");
        response.end();
    }, 5000);

}).listen(process.env.PORT);

console.log('Server running at PORT:' + process.env.PORT);