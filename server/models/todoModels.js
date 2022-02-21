const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    todos: {
      type: String,
      required: [true, 'Please add todos'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Todos', todoSchema);
