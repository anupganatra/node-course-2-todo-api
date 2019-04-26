var {mongoose} = require('./db/mongoose');

var{Todo} = require('./models/todo');
var{User} = require('./models/user');

/*var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save todo');
});


var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save', err);
});

var otherTodo2 = new Todo({
    text: 'Edit this video'
});

otherTodo2.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save', err);
});*/

var user = new User({
    email: 'abc@gmail.com'
});

user.save().then((doc) => {
    console.log('User saved', doc);
}, (err) => {
    console.log('Unable to save user', e);
});