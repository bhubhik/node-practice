const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(cors());

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
