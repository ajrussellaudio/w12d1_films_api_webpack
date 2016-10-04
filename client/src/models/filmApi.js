var films = require('./films')();

var FilmApi = function( app ) {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../../build/index.html'));
  });

  app.get('/films/:id', function( req, res ) {
    res.json( films[req.params.id] );
  });

  app.get('/films', function( req, res ) {
    res.json( films );
  });

  app.delete('/films/:id', function( req, res ) {
    films.splice(req.params.id, 1);
    res.json( films );
  });

  app.put('/films/:id', function( req, res ) {
    films[req.params.id] = req.body.film;
    res.json( films[req.params.id] );
  });

  app.post('/films', function( req, res ) {
    films.push( req.body.film );
    res.json( films );
  });

  app.post('/films/:id/reviews', function( req, res ) {
    films[req.params.id].reviews.push( req.body.review );
    res.json( films[req.params.id] )
  })

}

module.exports = FilmApi;