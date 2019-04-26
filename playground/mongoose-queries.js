const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5cc2af43f9c74e3d040c3039';
var id2 = '5cc1b980295a35570028388e';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});


Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }

    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(id2).then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log('User By Id', user);
}).catch((e) => console.log(e));