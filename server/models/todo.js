var mongoose = require('mongoose');

var Todo = mongoose.model('TodoDodo', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: (new Date()).getTime()
    }
});

module.exports.Todo = Todo;
