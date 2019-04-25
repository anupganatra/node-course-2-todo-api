//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5cc193520edeb469445a2bf6')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5cc18bfe0edeb469445a2922')
    }, {
        $set: {
            name: 'xyz'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});