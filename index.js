const express = require('express');

const app = express();

app.get('/', (req, res) => 
{
  return res.send({ message: 'test ok!' });
});

app.listen(3333);