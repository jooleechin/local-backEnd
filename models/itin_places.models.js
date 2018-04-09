const knex = require('../db/knex')

let all = () => {
  return knex('itin_places')
}

let oneByUserId = (id) => {
  return knex('itin_places')
    .where('user_id', id)
}

let oneById = (id) => {
  return knex('itin_places')
    .where({ id })
    .first()
}

let edit = (id, body) => {
  return knex('itin_places')
    .where({ id })
    .update(body, '*')
    .then(([result]) => {
      return result
    })
}

let erase = (id) => {
  return knex('itin_places')
    .where({ id })
    .del()
    .returning('*')
    .then(([result]) => {
      return result
    })
}

let create = (itin_id, places_id, order) => {
  return knex('itin_places')
    .insert({
      itin_id,
      places_id,
      order
    })
    .returning('*')
}

module.exports = {
  all,
  oneById,
  oneByUserId,
  edit,
  erase,
  create
}
