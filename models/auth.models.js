let knex = require('../db/knex')
let bcrypt = require('bcrypt')

let comparePass = (email, password) => {
    return knex('users')
    .where({
      'email': email
    })
    .first()
    .then(result =>  {
      return bcrypt.compare(password, result.password).then(matches => {
        if (matches) {
          delete result.password
          return result
        }
      })
    })
/*
  return knex('users')
  .where({
    'email': email
  })
  .first()
  .then(result => {
    bcrypt.compare(password, result.password)
    .then((matches) => {
      return matches
    })
    .catch(err => console.log(err))
  })*/
}

let signup = (first, last, email, password) => {
  return bcrypt.hash(password, 10)
  .then((hash) => {
    return knex('users')
    .insert({
      first,
      last,
      email,
      password: hash
    })
    .returning('*')
  })
}

module.exports = {
  comparePass,
  signup
}
