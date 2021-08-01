var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 59660);

app.get('/',function(req,res){
  res.render('home');
});

app.get('/about',function(req,res){
  res.render('about');
});

app.get('/practiceExams',function(req,res){
  res.render('practiceExams');
});

app.get('/terms',function(req,res){
  res.render('terms');
});

app.get('/testingLocations',function(req,res){
  res.render('testingLocations');
});

app.get('/generalTerms',function(req,res){
  res.render('generalTerms');
});

app.get('/mathTerms',function(req,res){
  res.render('mathTerms');
});

app.get('/chemistryTerms',function(req,res){
  res.render('chemistryTerms');
});

app.get('/generalTerms/anomaly',function(req,res){
  res.render('anomaly');
});

app.get('/generalTerms/equivocal',function(req,res){
  res.render('equivocal');
});

app.get('/generalTerms/lucid',function(req,res){
  res.render('lucid');
});

app.get('/generalTerms/precipitate',function(req,res){
  res.render('precipitate');
});

app.get('/generalTerms/assuage',function(req,res){
  res.render('assuage');
});

app.get('/mathTerms/hypotenuse',function(req,res){
  res.render('hypotenuse');
});

app.get('/mathTerms/circumference',function(req,res){
  res.render('circumference');
});

app.get('/mathTerms/supplementary',function(req,res){
  res.render('supplementary');
});

app.get('/mathTerms/perimeter',function(req,res){
  res.render('perimeter');
});

app.get('/mathTerms/cone',function(req,res){
  res.render('cone');
});

app.get('/chemistryTerms/absoluteZero',function(req,res){
  res.render('absoluteZero');
});

app.get('/chemistryTerms/entropy',function(req,res){
  res.render('entropy');
});

app.get('/chemistryTerms/halfLife',function(req,res){
  res.render('halfLife');
});

app.get('/chemistryTerms/idealGas',function(req,res){
  res.render('idealGas');
});

app.get('/chemistryTerms/photon',function(req,res){
  res.render('photon');
});

app.get('/mathPractice',function(req,res){
  res.render('mathPractice');
});

app.get('/generalPractice',function(req,res){
  res.render('generalPractice');
});

app.get('/chemistryPractice',function(req,res){
  res.render('chemistryPractice');
});

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
