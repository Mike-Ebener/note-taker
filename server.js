const express = require('express');
const { notes } = require('./Develop/db/db.json');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });


  app.post('/api/notes', (req, res) => {  
      // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);});

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });