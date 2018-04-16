const authModel = require('../models/auth.models')
// const userModel = require('../models/users.models')

let login = (req, res, next) => {
  const { email, password } = req.body
  authModel.comparePass(email, password)
    .then(matches => {
      debugger
      console.log('matches', matches)
      res.json({ matches })
    })
    .catch(e => next(e))
}

let signup = (req, res, next) => {
  let { first, last, email, password } = req.body
  authModel.signup(first, last, email, password)
    .then (results => {
      res.json(results)
    })
    .catch(err => next(err))
}

module.exports = {
  login,
  signup
}
