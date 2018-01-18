var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var Todo = require('./models/todo.js').Todo;
var User = require('./models/user.js').User;

var app = express();

// będzie parsować tylko te requesty, których header bd 'app/json'
app.use(bodyParser.json('application/json'));

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
     res.send({
       todos
     });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var {id} = req.params;
  if(!ObjectID.isValid(id)) { //if id is not valid (id creation rules)
    return res.status(404).send('invalid id');
  }
  Todo.findById(id)
    .then((todo) => {
      if(!todo) {
        return res.sendStatus(404).send();
      }
      res.send({todo});
    })
    .catch((e) => {
      res.status(400).send();
    });
});

app.listen(3000, () => {
  console.log('started on port 3000');
});

module.exports = {
  app
};

































//
