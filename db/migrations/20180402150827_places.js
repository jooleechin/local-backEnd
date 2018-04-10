
exports.up = function(knex, Promise) {
  return knex.schema.createTable('places', (t) => {
    t.increments()
    t.string('name').notNullable().defaultTo('')
    t.string('address').notNullable().defaultTo('')
    t.decimal('lat').notNullable()
    t.decimal('long').notNullable()
    t.string('phone').notNullable()
    t.json('hours').notNullable()
    t.json('photo').notNullable()
    t.decimal('rating').notNullable().defaultTo(0),
    t.json('reviews').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('places')
};
