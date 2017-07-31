const http = require('http');
const express = require( 'express' );

const app = express(); // creates an instance of an express application
const server = http.createServer();

server.listen(3000, function(){
    console.log('Listening on port 3000..');
});

app.use(function(req, res, next){
    //do your logging here
    //call 'next' or your app will be a black hole
    console.log(req.method + ' ' + req.url);
})

app.get('/', function(req, res){
    res.send('Hiiiiii\n');
});

app.get('/news', function(req, res){
    res.send('Hi, this is da news\n');
});

// app.get('/is-anybody-in-there', function(req, res){
//     res.send('Hello? Anyone here?\n');
// });

// app.post('/modernism', function(req, res, next) {
//   cartoons.push(req.body.cartoon);
//   res.sendStatus(201);
// })

server.on('request', app);