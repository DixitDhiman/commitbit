/**
 * Required External Modules
 */
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
/**
 * App Variables
 */
const app = express();

// Access-Control-Allow-Origin
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


const port = process.env.PORT || '8000';
const randonString = require('./randomString');

const databaseUrl = `mongodb://localhost:27017/commitbit`;

mongoose.connect(databaseUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(randonString);
/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
  res.status(200).send('Commitbit: Welcome to Commit Bit');
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});