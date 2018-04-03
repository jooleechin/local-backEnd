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

module.exports  = {
  all,
  one,
  erase
}
