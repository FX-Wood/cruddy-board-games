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

});

// INDEX

app.get('/games', function(req, res) {
    db.game.findAll()
    .then(function(games) {
        res.render("games/index", {games})
    })
});

// NEW

app.get("/games/new", function(req, res) {
    res.render("games/create")
});

// CREATE

app.post("/games", function(req, res) {
    db.game.create({
        name: req.body.name,
        description: req.body.description,
        players: req.body.players
    }).then(done => {
        res.redirect('/games')
    })
});

// SHOW

app.get("/games/:id([0-9]+)", function(req, res) {
    db.game.findById(parseInt(req.params.id))
    .then(function(game) {
        res.render('games/show', {game})
    })
});

// EDIT

app.get("/games/:id([0-9]+)/edit", function(req, res) {
    console.log('/games/id/edit', req.originalUrl)
    db.game.findById(parseInt(req.params.id))
    .then(function(game) {
        res.render('games/edit', {game})
    })
});

// UPDATE
app.put("/games/:id", function(req, res) {
    console.log('PUT /games/:id', req.originalUrl);
    db.game.findOne({
        where: {id: req.params.id}
    })
    .then(game => {
        console.log(req.body.name, req.body.description, req.body.players)
        game.update({
            name: req.body.name,
            description: req.body.description,
            players: req.body.players,
        });
    })
    .then(game => {
        res.redirect("/games/" + req.params.id)
    })
});

app.delete('/games/:id', function(req, res) {
    console.log('DELETE /games/:id')
    db.game.destroy({
        where:{
            id: req.params.id
        }
    }).then(
        res.redirect('/games')
    )
});

app.listen(3000, function() {
    console.log('cruddy board games');
    console.log('listening on port 3000');
});