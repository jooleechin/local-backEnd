const placesModel = require('../models/places.models')

let all = (req, res, next) => {
  placesModel.all().then(places => res.json({ places }))
}

let one = (req, res, next) => {
  placesModel.one(req.params.id).then(place => res.json({ place }))
}

let erase = (req, res, next) => {
  placesModel.erase(req.params.id).then(place => res.json({ place }))
}

let add = (req, res, next) => {
  let { name, address, lat, long, phone, hours, rating, photo, reviews, photoUrl, googlePlace_ID  } = req.body
  placesModel.add(name, address, lat, long, phone, hours, rating, photo, reviews, photoUrl, googlePlace_ID)
    .then(place => {
      res.json({ place })
    })
    .catch(err => {
      res.json({ err })
      console.log(err)
    })
}

module.exports  = {
  all,
  one,
  erase,
  add
}
