const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  db.collection('Todos').findOneAndUpdate({
    text: 'sth to do'
  }, {
     $set: {
    name: 'Mateusz'
  },$inc: {
    age: 5
  }

  }, {returnOriginal: false}).then((original) => {
    console.log(original);
  });

  //db.close();
});
//
