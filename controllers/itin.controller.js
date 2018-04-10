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

let itinByUserAndId = (req, res, next) => {
  itinModel.itinByUserAndId(Number(req.params.itin_id), Number(req.params.user_id)).then(allPlaces => {
    debugger
    res.json({ allPlaces })
  })
  .catch(e => {
    debugger
    console.log(e)
  })
}

let create = (req, res, next) => {
  let { name, user_id, itin_date } = req.body
  itinModel.create(name, user_id, itin_date)
  .then(itin => {
    res.json({ itin })
  })
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
  itinByUserAndId,
  create
}
