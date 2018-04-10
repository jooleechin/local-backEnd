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

let add = (name, address, lat, long, phone, hours, rating, photo, reviews) => {
  return knex('places')
    .insert({
      name,
      address,
      lat,
      long,
      phone,
      hours,
      photo,
      rating,
      reviews,
    })
    .returning('*')
}

module.exports = {
  all,
  one,
  erase,
  add
}
