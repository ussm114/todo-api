const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a569adf0f976312642e402a')
  // }).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({location: 'inowroclaw'}).toArray().then((count) => {
    console.log('users printed: ');
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('unable to fetch users', err);
  });

  //db.close();
});
