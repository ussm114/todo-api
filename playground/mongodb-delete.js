const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  //delete many
  // db.collection('Todos').deleteMany({text: "walk the dog"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: "walk the dog"}).then((result) => {
  //   console.log(result);
    // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // delete duplicates
  db.collection('Todos').deleteOne({_id: new ObjectID("5a569ba8ef8db61650f8f18b")});

  //db.close();
});
