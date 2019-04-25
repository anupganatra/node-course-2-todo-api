//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

/*    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos'); 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find({_id: new ObjectID('5cc1883e0edeb469445a275e')}).toArray().then((docs) => {
        console.log('Todos'); 
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`); 
    }, (err) => {
        return console.log('Unable to insert user', err);
    });*/

    db.collection('Users').find({name : 'abc'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        return console.log('Unable to fetch users', err);
    });

    client.close();
});