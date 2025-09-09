// const express = require('express'); //when using commingjs
import express from 'express' // when using module(This is the recommended ways)
const app = express();  

const PORT = 8090;

// single get endpoint to say heelo world

app.get('/', (req, res) => {
  res.send('Hello World!');         // respond when someone visits 
});

app.get('/list', (req, res) => {
    res.send("List items are [Mango, Banana, Phone]")
})

app.listen(PORT, () => {
  console.log('Server is running at http://localhost:${PORT}');
});