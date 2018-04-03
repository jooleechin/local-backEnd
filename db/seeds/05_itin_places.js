
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itin_places').del()
    .then(function () {
      // Inserts seed entries
      return knex('itin_places').insert([
        {id: 1, itin_id: 1, places_id: 1, order: 1},
        {id: 2, itin_id: 1, places_id: 2, order: 2}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('itin_places_id_seq', (SELECT MAX(id) FROM itin_places))`
      )
    })
};
