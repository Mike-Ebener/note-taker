const express = require('express');
const { notes } = require('./Develop/db/db.json');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();
//added fs
const fs = require('fs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
    //console.log('test');
});

//catch all for
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });


  app.post('/api/notes', (req, res) => {  
      // req.body is where our incoming content will be
      
    console.log(req.body);
    res.json(req.body);});

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });