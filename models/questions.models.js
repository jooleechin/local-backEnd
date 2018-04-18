
const knex = require('../db/knex')

let getAllQuestions = () => (knex('questions'))

let getOneByUser = (id) => {
  return knex('questions')
    .where('user_id', id)
    .first()
}
let getOneByItinID = (id) => {
  return knex('questions')
    .where('itin_id', id)
    .first()
}
let getQuestionByUserAndItin =(user_id, itin_id) => {
  return knex('questions')
    .where({
      user_id: user_id,
      itin_id: itin_id
    })
    .first()
}

let edit = (id) => {
  return knex('questions')
    .where('itin_id', id)
    .first()
}
let create = (user_id, destination, lat_stay, lng_stay, q1_transport, q2_money, q3_time, q4_interests, itin_id) => {
  return knex('questions')
    .insert({
      user_id,
      destination,
      lat_stay,
      lng_stay,
      q1_transport,
      q2_money,
      q3_time,
      q4_interests,
      itin_id
    })
    .returning('*')
}
module.exports = {
  getAllQuestions,
  getOneByUser,
  edit,
  create,
  getOneByItinID,
  getQuestionByUserAndItin
}
