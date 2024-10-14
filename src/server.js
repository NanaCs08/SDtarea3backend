const express = require('express');
const mongoose = require('mongoose');
const serverless = require('express-serverless-http');
const cors = require('cors');
require('dotenv').config();

const publisherRoutes = require('./routes/publisherRoutes');
// const authorRoutes = require('./routes/authorRoutes');
// const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error de conexión:', err));

app.use('/api/publishers', publisherRoutes);
// app.use('/api/authors', authorRoutes);
// app.use('/api/books', bookRoutes);

module.exports.handler = serverless(app);
