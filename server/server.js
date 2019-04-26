var {mongoose} = require('./db/mongoose');
var express = require('express');
var bodyparser = require('body-parser');

var{Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});