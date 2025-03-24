const express = require('express');
const app = express();
const projects = require('./projects.json');

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});