
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => knex('places').del())
    .then(() => knex('questions').del())
    .then(() => knex('itin').del())
    .then(() => knex('itin_places').del())
};
