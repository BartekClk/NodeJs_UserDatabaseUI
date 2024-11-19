const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Editor' },
];

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', { title: 'UMS - Home'});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'UMS - About'});
});

app.get('/users', (req, res) => {
  res.render('user', { title: 'UMS - User List', users });
});

app.get('/adduser', (req, res) => {
  res.render('addUser', { title: 'UMS - Add User' });
});

app.post('/adduser', (req, res) => {
  // Create a new user object from the form data
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };
  // Add the new user to the array
  users.push(newUser);

  // Redirect to the user list page
  res.redirect('/users');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
