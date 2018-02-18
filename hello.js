const addon = require('./build/Release/addon');

var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'})
   //response.write(request.url);
   // Send the response body as "Hello World"
   response.write(addon.hello());
   response.write((addon.add(3,5)).toString());
   if(request.url === '/zoho')
	   response.write('Ganesh and nandu at zoho')
   else
	   response.write('Ganesh and nandu at Any company');
   response.end('<html><body><form><h1>Friends</h1><ul><li>Ganesh</li><li>Nandu</li></ul></body></html>\n');
}).listen(8081);


// Console will print the message
console.log('Server running at	 http://127.0.0.1:8081/');
console.log(addon.hello());
// Prints: 'world'