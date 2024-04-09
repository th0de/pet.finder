const express = require('express');

const app = express ();

const port= 8080

app.get(`/hello`,(req, res) => {
  res.send('Hello');
});

app.listen(8080, () => {
  console.log(`Server is running on port${8080}`); 
});

app.get('path', (req, res) => { res.send('Welcome'); })

app.get('path', (req, res) => {res.send('/api/v1/pets'); })



app.get('/hello', (req, res) => { res.send('Hello World!'); }); 

app.get('/hello/:name', (req, res) => { const name = req.params.name; res.send(`Hello ${name}`); });       

app.get('/hello-query', (req, res) => { const name = req.query.name; res.send(`Hello ${name}`); }); 

