const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())
app.use(bodyParser.json())

app.get('/google', (req, res) => {
  let { lat, lng , radius, type, maxPrice } = req.query
  let KEY = 'AIzaSyALvBudR4iVXU22Q5VkKNzXV4S7A9Q7Zqk'
  // let KEY = 'AIzaSyD16ge00rRuJtxfGlzUzlmuDBxa6GkEVCg'
  let baseURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?`
  return axios.get(`${baseURL}location=${lat},${lng}&radius=${radius}&type=${type}&maxprice=${maxPrice}&key=${KEY}`)
  .then ((result) => {
    res.send(result.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/googleKEYWORD', (req, res) => {
  let { lat, lng , radius, type, keyword, maxPrice } = req.query
  let KEY = 'AIzaSyDZgyzJiLq59ap77yMCrZCGNkIul2KKGgo'
  // let KEY = 'AIzaSyD16ge00rRuJtxfGlzUzlmuDBxa6GkEVCg'
  let baseURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?`
  return axios.get(`${baseURL}location=${lat},${lng}&radius=${radius}&type=${type}&keyword=${keyword}&maxprice=${maxPrice}&key=${KEY}`)
  .then ((result) => {
    res.send(result.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/photo', (req, res) => {
  debugger
  let { photoreference } = req.query
  let KEY = 'AIzaSyDZgyzJiLq59ap77yMCrZCGNkIul2KKGgo'
  // let KEY = 'AIzaSyD16ge00rRuJtxfGlzUzlmuDBxa6GkEVCg'
  let baseURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400`
  return axios.get(`${baseURL}&photoreference=${photoreference}&key=${KEY}`)
  .then ((result) => {
    debugger
    res.json({path: result.request.path})
  })
  .catch ((err) => {
    debugger
    console.log(err)
  })
})



const { usersRouter, questionsRouter, itinRouter, placesRouter, authRouter } = require('./routes')
app.use('/users', usersRouter)
app.use('/questions', questionsRouter)
app.use('/itins', itinRouter)
app.use('/places', placesRouter)
app.use(authRouter)

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
