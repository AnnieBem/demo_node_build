var http = require('http');
var handleRequest = function(request, response) {
    response.writeHead(200);
    response.end("<h1>This is Annie's project</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
