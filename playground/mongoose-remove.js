const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove('5cc2fa420edeb469445a45d4').then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5cc2fa420edeb469445a45d4').then((todo) => {
//     console.log(todo);
// });