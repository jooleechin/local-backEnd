const usersModel = require('../models/users.models')

let all = (req, res, next) => {
  usersModel.all().then(users => res.json({ users }))
}

let one = (req, res, next) => {
  usersModel.one(req.params.id).then(user => res.json({ user }))
}

let userItin = (req, res, next) => {
  usersModel.userItin(req.params.id).then(itin => res.json({ itin }))
}

let edit = (req, res, next) => {
  usersModel.edit(req.params.id, req.body).then(user => res.json({ user }))
}

let erase = (req, res, next) => {
  usersModel.erase(req.params.id).then(user => res.json({ user }))
}

module.exports = {
  all,
  one,
  userItin,
  edit,
  erase
}
