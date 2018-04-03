
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, user_id: 1, q1: 'nature', q2: 'no', q3: 'morning'},
        {id: 2, user_id: 3, q1: 'instagram', q2: 'poop', q3: 'morning'},
        {id: 3, user_id: 2, q1: 'nature', q2: 'no', q3: 'morning'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))`
      )
    })
};
