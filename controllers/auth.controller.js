const authModel = require('../models/auth.model')
const userModel = require('../models/users.model')

let login = (req, res, next) => {
  const { email, password } = req.body
  authModel.comparePass(email, password)
    .then(matches => {
      res.json({ matches })
    })
    .catch(e => next(e))
}

let signup = (req, res, next) => {
  let { first, last, email, phone, password } = req.body
  authModel.signup(first, last, email, phone, password)
    .then (results => {
      res.json(results)
    })
    .catch(err => next(err))
}

module.exports = {
  login,
  signup
}
