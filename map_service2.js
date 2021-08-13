var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});



app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 59661);



app.get('/',function(req,res){
  res.render('map_service_gui');
});

app.get('/2',function(req,res){
  res.render('map_gui_2');
});


/*
The below code acts as the server for another group member by receiving JSON data, 
handling it, passing it to other functions as needed, and then returning a response.
*/

const http = require('http');

http.createServer((request, response) => {
const { headers, method, url } = request;
let body = [];
request.on('error', (err) => {
    console.error(err);
}).on('data', (chunk) => {
    body.push(chunk);
}).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', (err) => {
    console.error(err);
    });


    let newData = JSON.stringify(body);
    let keys = JSON.parse(newData);



    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
});
}).listen(59662);

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
  });
  
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
  });
  
  app.listen(app.get('port'), function(){
    console.log('Express started on http://flip1.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
  });