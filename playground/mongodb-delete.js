//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

/*    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result); 
    }, (err) => {
        return console.log('Unable to delete todos', err);
    });

    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result); 
    }, (err) => {
        return console.log('Unable to delete todos', err);
    });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result); 
    }, (err) => {
        return console.log('Unable to delete todos', err);
    });

    db.collection('Users').deleteMany({name : 'xyz'}).then((result) => {
        console.log(result); 
    }, (err) => {
        return console.log('Unable to delete todos', err);
    });*/

    db.collection('Users').findOneAndDelete({_id : new ObjectID("5cc18c100edeb469445a292e")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        return console.log('Unable to delete users', err);
    });

    client.close();
});