var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var nunjucks = require('nunjucks');

app.use(routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan(':method :url :status'));

app.use('/static', express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express: app
})

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.listen(5432, function() {
  console.log("We are listening");
});
