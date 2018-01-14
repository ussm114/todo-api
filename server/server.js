var express = require('express');
var bodyParser = require('body-parser');

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
    console.log('saved:  ', doc);
    res.send(doc);
  }).catch((e) => {
    res.status(400).send(e);
    console.log(e);
  })
});

app.listen(3000, ()=> {
  console.log('started on port 3000');
});



































//
