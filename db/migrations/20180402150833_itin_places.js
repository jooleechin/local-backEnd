
exports.up = function(knex, Promise) {
  return knex.schema.createTable('itin_places', (t) => {
    t.increments()
    t.integer('itin_id').notNullable()
    t.foreign('itin_id').references('itin.id').onDelete('CASCADE')
    t.integer('places_id').notNullable()
    t.foreign('places_id').references('places.id').onDelete('CASCADE')
    t.integer('order').notNullable().defaultsTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('itin_places')
};
