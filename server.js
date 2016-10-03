var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// var films = require('./client/src/models/films')();

var FilmApi = require('./client/src/models/filmApi');

app.use(express.static('client/build'));

app.listen(3000, function () {
  new FilmApi( app );
  console.log('App running on port '+this.address().port);
});
