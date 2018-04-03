
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itin').del()
    .then(function () {
      // Inserts seed entries
      return knex('itin').insert([
        {id: 1, name: 'Fun evening with momma', user_id: 1, itin_date: '2018-03-27'},
        {id: 2, name: 'Datenight', user_id: 3, itin_date: '2018-01-15'},
        {id: 3, name: 'GNO', user_id: 2, itin_date: '2018-02-02'},
        {id: 4, name: 'Fun evening with momma', user_id: 2, itin_date: '2018-03-02'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('itin_id_seq', (SELECT MAX(id) FROM itin))`
      )
    })
};
