var express = require('express');
var methodOverride = require('method-override');
var db = require("./models");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.get('/', function(req, res) {
    res.render('index');

})

app.get('/games', function(req, res) {
    // find data within data object
    // send response
    // res.render
    
    
    db.game.findAll()
    // try and get all records
    .then(function(games) {
        res.render("games/index", {games})
    })
})

app.get("/games/:id", function(req, res) {
    console.log('here')
    db.game.findById(parseInt(req.params.id))
    .then(function(game) {
        res.render('games/show', {game})
    })
})


app.listen(3000, function() {
    console.log('cruddy board games');
    console.log('listening on port 3000');
})