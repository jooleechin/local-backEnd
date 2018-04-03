const knex = require('../db/knex')

let all = () => (knex('users'))

let one = (id) => {
  return knex('users')
    .where({ id })
    .first()
}

let userItin = (id) => {
  return knex('itin')
    .where({ id })
}

let edit = (id, body) => {
  return knex('users')
    .where({ id })
    .update(body, '*')
    .then(([result]) => {
      return result
    })
}

let erase = (id) => {
  return knex('users')
    .where({ id })
    .del()
    .returning('*')
    .then(([result]) => {
      return result
    })
}

module.exports = {
  all,
  one,
  userItin,
  edit,
  erase
}
