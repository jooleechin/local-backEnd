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
  // let KEY = 'AIzaSyAvDHjil0q4smD6h3GttT200WLv8AasCIw'
  let KEY = 'AIzaSyDm0SycGanfFTWTyqReuBHjpseMKYvuBQw'
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
  // let KEY = 'AIzaSyAvDHjil0q4smD6h3GttT200WLv8AasCIw'
  let KEY = 'AIzaSyDm0SycGanfFTWTyqReuBHjpseMKYvuBQw'
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
  let { photoreference } = req.query
  // let KEY = 'AIzaSyAvDHjil0q4smD6h3GttT200WLv8AasCIw'
  let KEY = 'AIzaSyDm0SycGanfFTWTyqReuBHjpseMKYvuBQw'
  let baseURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400`
  return axios.get(`${baseURL}&photoreference=${photoreference}&key=${KEY}`)
  .then ((result) => {
    res.json({path: result.request.path})
  })
  .catch ((err) => {
    console.log(err)
  })
})

app.get('/placeID', (req, res) => {
  let { placeID } = req.query
  // let KEY = 'AIzaSyAvDHjil0q4smD6h3GttT200WLv8AasCIw'
  let KEY = 'AIzaSyDm0SycGanfFTWTyqReuBHjpseMKYvuBQw'
  let baseURL = `https://maps.googleapis.com/maps/api/place/details/json?`
  return axios.get(`${baseURL}placeid=${placeID}&key=${KEY}`)
  .then ((result) => {
    res.send(result.data)
  })
  .catch((err) => {
    console.log(err)
  })
})


const { usersRouter, questionsRouter, itinRouter, placesRouter, authRouter, itinPlacesRouter } = require('./routes')
app.use('/users', usersRouter)
app.use('/questions', questionsRouter)
app.use('/itins', itinRouter)
app.use('/places', placesRouter)
app.use('/itinplaces', itinPlacesRouter)
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
