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
    .then(([result]) => { //taking out of array
      return result
    })
}

let itinByUserAndId = (itin_id, user_id) => {
  return knex('itin')
    .innerJoin('itin_places', 'itin.id', 'itin_places.itin_id')
    .innerJoin('places', 'places.id', 'itin_places.places_id')
    .where({
      'itin.id': itin_id,
      'user_id': user_id
    })
    .select()
}

module.exports = {
  all,
  oneById,
  oneByUserId,
  edit,
  erase,
  itinByUserAndId
}
