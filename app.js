const http = require('http');
const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const bodyParser = require('body-parser');
var socketio = require('socket.io');
const routes = require('./routes');
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var server = app.listen(3000, function(){
    console.log('Listening on port 3000..');
});

app.use(express.static(__dirname + '/public'));
var io = socketio.listen(server);
app.use('/', routes(io));


app.use(function(req, res, next){
    //do your logging here
    //call 'next' or your app will be a black hole
    console.log(req.method + ' ' + req.url);
    next();
})

server.on('request', app);
