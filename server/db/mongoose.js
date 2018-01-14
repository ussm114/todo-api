var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //powiedz mongoose zeby korzystał z obietnic JSowych, a nie 3rd party
mongoose.connect('mongodb://localhost:27017/TodoApp');
module.exports = {
  mongoose
};
