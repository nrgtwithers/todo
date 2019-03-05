const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//body parser middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
  });
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT);