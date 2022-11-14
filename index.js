const express = require('express');
const login = require('./pages/login');

const app = express();
login(app);

app.listen(3000);