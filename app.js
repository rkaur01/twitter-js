const http = require('http');
const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const server = http.createServer();

const routes = require('./routes');
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

var locals = {
    title: 'Whatever',
    people: [
        {name: 'Raz'},
        {name: 'Jamie'}
    ]
}

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

nunjucks.configure('views', {noCache: true});

server.listen(3000, function(){
    console.log('Listening on port 3000..');
});

app.use(function(req, res, next){
    //do your logging here
    //call 'next' or your app will be a black hole
    console.log(req.method + ' ' + req.url);
    next();
})



server.on('request', app);