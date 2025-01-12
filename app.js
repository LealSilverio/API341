const express = require('express');
const app = express();
const port = 8080;

// Define routes
app.use('/', require('./routes'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});