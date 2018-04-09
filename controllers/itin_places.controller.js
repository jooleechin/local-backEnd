const itinPlacesModel = require('../models/itin_places.models')

let all = (req, res, next) => {
  itinPlacesModel.all().then(itins => res.json({ itins }))
}

let oneByUserId = (req, res, next) => {
  itinPlacesModel.oneByUserId(req.params.id).then(itin => res.json({ itin }))
}

let oneById = (req, res, next) => {
  itinPlacesModel.oneById(req.params.id).then(itin => res.json({ itin }))
}

let edit = (req, res, next) => {
  itinPlacesModel.edit(req.params.id, req.body).then(itin => res.json({ itin }))
}

let erase = (req, res, next) => {
  itinPlacesModel.erase(req.params.id).then(itin => res.json({ itin }))
}

let create = (req, res, next) => {
  let { itin_id, places_id, order  } = req.body
  itinPlacesModel.create(itin_id, places_id, order)
    .then(itin => res.json({ itin }))
    .catch(err => {
      res.json({ err })
      console.log(err)
    })
}

module.exports = {
  all,
  oneById,
  oneByUserId,
  edit,
  erase,
  create
}
