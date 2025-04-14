const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Hardcoded user credentials (for demonstration purposes)
const validUser = {
  email: "user@example.com",
  password: "password123",
};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Use EJS as the templating engine
app.set('views', path.join(__dirname, 'views')); // Set views folder

// Serve login page
app.get('/login', (req, res) => {
  res.render('login');
});

// Handle login submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate credentials
  if (email === validUser.email && password === validUser.password) {
    res.send(`
      <h2>Login Successful!</h2>
      <p>Welcome, ${email}.</p>
      <a href="/">Go to Homepage</a>
    `);
  } else {
    res.send(`
      <h2>Invalid Credentials</h2>
      <p>Please try again.</p>
      <a href="/login">Back to Login</a>
    `);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
