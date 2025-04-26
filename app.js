const express = require('express');
const indexRoutes = require('./routes/index');

const port = process.env.PORT || 8080;
const app = express();

app.use('/', indexRoutes);

app.listen(port);
console.log(`Connected to DB and listening on http://localhost:${port}/`);