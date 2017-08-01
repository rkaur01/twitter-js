const http = require('http');
const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const server = http.createServer();

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

app.get('/', function(req, res){
    res.render('index', {title: 'Hello', people: locals.people});
});

app.get('/news', function(req, res){
     res.render('index', {title: 'Daily News', people: locals.people});
});

server.on('request', app);