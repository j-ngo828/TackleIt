const express = require('express');
const morgan = require('morgan');

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.send('Hello world 🌎! Welcome to Tackle It');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
