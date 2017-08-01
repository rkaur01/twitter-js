const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function (io) {
  router.get('/stylesheets/style.css', function(req, res){
      res.sendFile(req.URL);
  })

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    console.log(name);
    var tweets = tweetBank.find( {name: name} );
    res.render( 'index', { userName: name, tweets: tweets, showForm: true } );
  });

  router.get('/tweets/:id', function(req, res) {
    var id = req.params.id;
    var tweets = tweetBank.find( { id: id } );
    res.render( 'index', { tweets: tweets } );
  });

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });
  
  return router;
};





