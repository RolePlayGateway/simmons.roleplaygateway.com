var express = require('express')
  , app = express()
  , fs = require('fs');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade');
app.set('view options', {
 layout: true
});

var images = fs.readdirSync('./public/img/simmons');

app.get('/', function(req, res) {
  res.render('index', {
    images: images.sort()
  });
});

app.listen(98);
