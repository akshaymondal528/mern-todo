const asyncHandler = require('express-async-handler');
const Todos = require('../models/todoModels');

// @desc    Get Todos
// @routes  GET /todos
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todos.find();
  res.status(200).json(todos);
});

// @desc    Create Todos
// @routes  POST /todos
const setTodos = asyncHandler(async (req, res) => {
  if (!req.body.todos) {
    res.status(400);
    throw new Error('Please add todos');
  }
  const newTodo = await Todos.create(req.body);
  res.status(201).json(newTodo);
});

// @desc    Update Todos
// @routes  PUT /todos
const updateTodos = asyncHandler(async (req, res) => {
  const todos = await Todos.findById(req.params.id);
  if (!todos) {
    res.status(400);
    throw new Error('Todos not found');
  }
  const updateTodos = await Todos.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json(updateTodos);
});

// @desc    Delete Todos
// @routes  DELETE /todos
const deleteTodos = asyncHandler(async (req, res) => {
  const todos = await Todos.findById(req.params.id);
  if (!todos) {
    res.status(400);
    throw new Error('Todos not found');
  }
  await Todos.findByIdAndRemove(req.params.id);
  res.status(201).json({ message: `Delete todos for ${req.params.id}` });
});

module.exports = {
  getTodos,
  setTodos,
  updateTodos,
  deleteTodos,
};
