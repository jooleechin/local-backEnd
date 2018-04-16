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

let add = (name, address, lat, long, phone, hours, rating, photo, reviews, photoUrl, googlePlace_ID) => {
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
      photoUrl,
      googlePlace_ID
    })
    .returning('*')
}

module.exports = {
  all,
  one,
  erase,
  add
}
