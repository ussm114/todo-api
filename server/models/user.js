var mongoose = require('mongoose');


var User = mongoose.model('Userrro', {
  name: {
    type: String,
    required: true
  }, email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }, createdAt: {
    type: Number,
    default: (new Date()).valueOf()
  }
});

module.exports.User = User;
