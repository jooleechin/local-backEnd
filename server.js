const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

const { usersRouter, questionsRouter, itinRouter, placesRouter } = require('./routes')
app.use('/users', usersRouter)
app.use('/questions', questionsRouter)
app.use('/itins', itinRouter)
app.use('/places', placesRouter)

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  res.status(status).json({ message, status });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port', port);
});

module.exports = app
