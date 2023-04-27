var express = require('Express');
var app = express();

var routes = require('./routes/routes.js');

//both index.js and things.js should be in same directory
app.use('/url', routes);

app.listen(3000);