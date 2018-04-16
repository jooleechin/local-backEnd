let knex = require('../db/knex')

let comparePass = (email, password) => {
  return knex('users')
  .where({
    'email': email,
    'password': password
  })
  .first()
  .then(result => {
    if (result) {
      return result
    }
    return false
  })
}

let signup = (first, last, email, password) => {
  return knex('users')
  .insert({
    first,
    last,
    email,
    password
  })
  .returning('*')
}

module.exports = {
  comparePass,
  signup
}
