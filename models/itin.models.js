const knex = require('../db/knex')

let all = () => {
  return knex('itin')
}

let oneByUserId = (id) => {
  return knex('itin')
    .where('user_id', id)
}

let oneById = (id) => {
  return knex('itin')
    .where({ id })
    .first()
}

let edit = (id, body) => {
  return knex('itin')
    .where({ id })
    .update(body, '*')
    .then(([result]) => {
      return result
    })
}

let erase = (id) => {
  return knex('itin')
    .where({ id })
    .del()
    .returning('*')
    .then(([result]) => {
      return result
    })
}

module.exports = {
  all,
  oneById,
  oneByUserId,
  edit,
  erase
}
