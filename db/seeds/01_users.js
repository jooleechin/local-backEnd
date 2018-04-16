
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 4, first: 'Joolee', last: 'Chin', email: 'jooleechin@gmail.com', password: 'poop'},
        {id: 2, first: 'Bryce', last: 'Paine', email: 'bpaine@gmail.com', password: 'hi'},
        {id: 3, first: 'Egg', last: 'Plant', email: 'eggplant@gmail.com', password: 'eggplant'},
        {id: 1, first: 'test', last: 'test', email: 'test@gmail.com', password: 'test'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`
      )
    })
};
