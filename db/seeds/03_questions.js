
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, user_id: 1, destination: 'seattle', lat_stay: 37.76999, lng_stay: -122.44696, q1_transport: 'walking', q2_time: 'morning', q3_interests: 'shopping'},
        {id: 2, user_id: 3, destination: 'seattle', lat_stay: 37.76999, lng_stay: -122.44696, q1_transport: 'public transit', q2_time: 'all day', q3_interests: 'random stuff'},
        {id: 3, user_id: 2, destination: 'seattle', lat_stay: 37.76999, lng_stay: -122.44696, q1_transport: 'car', q2_time: 'morning', q3_interests: 'nature'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))`
      )
    })
};
