const itinModel = require('../models/itin.models')

let all = (req, res, next) => {
  itinModel.all().then(itins => res.json({ itins }))
}

let oneByUserId = (req, res, next) => {
  itinModel.oneByUserId(req.params.id).then(itin => res.json({ itin }))
}

let oneById = (req, res, next) => {
  itinModel.oneById(req.params.id).then(itin => res.json({ itin }))
}

let edit = (req, res, next) => {
  itinModel.edit(req.params.id, req.body).then(itin => res.json({ itin }))
}

let erase = (req, res, next) => {
  itinModel.erase(req.params.id).then(itin => res.json({ itin }))
}

module.exports = {
  all,
  oneById,
  oneByUserId,
  edit,
  erase
}
