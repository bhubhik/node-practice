const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tasks = [
  { id: 1, title: 'First task.', completed: true },
  { id: 2, title: 'Second task', completed: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is runnin on port ${port}.`);
});
