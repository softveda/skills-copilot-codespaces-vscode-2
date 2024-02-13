// Create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

// create a route
app.get('/comments', (req, res) => {
  res.send('Welcome to the comments page');
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});