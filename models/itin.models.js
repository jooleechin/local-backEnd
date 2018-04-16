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
    .select(
      ['itin.id as itin_id', 'itin.name as itin_name', 'itin.user_id as user_id',
      'itin.itin_date as itin_date', 'itin.destination as destination',
      'itin_places.places_id', 'itin_places.order', 'places.name as places_name',
      'places.address', 'places.lat', 'places.long', 'places.phone', 'places.hours',
      'places.photo', 'places.rating', 'places.reviews', 'places.photoUrl', 'places.googlePlace_ID']
    )
    .innerJoin('itin_places', 'itin.id', 'itin_places.itin_id')
    .innerJoin('places', 'places.id', 'itin_places.places_id')
    .where({
      'itin_id': itin_id,
      'user_id': user_id
    })
}

let create = (name, user_id, itin_date, destination) => {
  return knex('itin')
  .insert({
    name,
    user_id,
    itin_date,
    destination
  })
  .returning('*')
}

module.exports = {
  all,
  oneById,
  oneByUserId,
  edit,
  erase,
  itinByUserAndId,
  create
}
