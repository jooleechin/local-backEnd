
const knex = require('../db/knex')

let getAllQuestions = () => (knex('questions'))

let getOneByUser = (id) => {
  return knex('questions')
    .where('user_id', id)
    .first()
}

let edit = (id) => {
  return knex('questions')
    .where('user_id', id)
    .first()
}
let create = (user_id, destination, lat_stay, lng_stay, q1_transport, q2_time, q3_interests) => {
  return knex('questions')
    .insert({
      user_id,
      destination,
      lat_stay,
      lng_stay,
      q1_transport,
      q2_time,
      q3_interests
    })
    .returning('*')
}
module.exports = {
  getAllQuestions,
  getOneByUser,
  edit,
  create
}
