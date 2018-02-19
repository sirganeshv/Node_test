const webaddon = require('./build/Release/webaddon');
var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
	webaddon.printname(req.body.name);
  res.write('You sent the name "' + req.body.name + '".');
  res.end();
  //webaddon.printName(req.body.name);
});

app.get('/form',function(req,resp) {
	if (req.url === "/form") {
        fs.readFile("testhtml.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
				resp.write("test");
                resp.write(pgResp);
            }
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
    }
});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
