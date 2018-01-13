const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'yet another thing to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     console.log('unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });

  // db.collection('Users').insertOne({
  //   name: 'mateusz',
  //   age: 24,
  //   location: 'wroclaw'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // });

  db.close();
});
