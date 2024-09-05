const express = require('express');
const bodyParser = require('body-parser');
const { connectToDb } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

connectToDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен на http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Ошибка подключения к базе данных:', error);
  });
