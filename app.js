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



server.listen(3000, function(){
    console.log('Listening on port 3000..');
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output) {
    if (err) { console.log(err.message)}
    else console.log(output);
});


app.use(function(req, res, next){
    //do your logging here
    //call 'next' or your app will be a black hole
    console.log(req.method + ' ' + req.url);
})

app.get('/', function(req, res){
    res.render('index', {title: 'Hello', people: locals.people});
});

app.get('/news', function(req, res){
     res.render('index', {title: 'Daily News', people: locals.people});
});

// app.get('/is-anybody-in-there', function(req, res){
//     res.send('Hello? Anyone here?\n');
// });

// app.post('/modernism', function(req, res, next) {
//   cartoons.push(req.body.cartoon);
//   res.sendStatus(201);
// })

server.on('request', app);
