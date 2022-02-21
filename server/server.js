const express = require('express');
const dotenv = require('dotenv').config();

const todoRoutes = require('./routes/todoRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server run on http://localhost:${port}`));
