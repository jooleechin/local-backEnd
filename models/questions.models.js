const knex = require('../db/knex')

let getAllQuestions = () => (knex('questions'))

let getOneByUser = (id) => {
  return knex('questions')
    .where('user_id', id)
    .first()
}

let edit = (id) => {
  return knex('questions')
    .where({ id })
    .first()
}

module.exports = {
  getAllQuestions,
  getOneByUser,
  edit
}
