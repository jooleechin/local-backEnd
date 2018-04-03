const knex = require('../db/knex')

let all = () => (knex('places'))

let one = (id) => {
  return knex('places')
    .where({ id })
    .first()
}

let erase = (id) => {
  return knex('places')
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
  erase
}
