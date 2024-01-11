const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});
const MONGO_URL =
  'mongodb+srv://heatkimnak:C7kjI9Yg6icfca7e@cluster0.uxvotiv.mongodb.net/antiwaste?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Database Connected.');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/auth', require('./routes/auth'));
app.listen(5000, () => {
  console.log('Listening on port 5000');
});
