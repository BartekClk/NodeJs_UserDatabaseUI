const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/', (req, res) => {
  res.render('home');
});
  
app.get('/users', (req, res) => {
  res.render('user');
});

app.get('/adduser', (req, res) => {
  res.render('addUser');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});