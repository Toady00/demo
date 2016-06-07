
var http = require('http');
var port = process.env.PORT || 8080;
var env  = process.env.NODE_ENV;

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port);
});
 
