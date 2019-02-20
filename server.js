var express = require('express');
var methodOverride = require('method-override');
var db = require("./models");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.get('/', function(req, res) {
    res.send('this is the root route');
})




app.listen(3000, function() {
    console.log('cruddy board games');
    console.log('listening on port 3000');
})