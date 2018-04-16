
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (t) => {
    t.increments()
    t.integer('user_id').notNullable().defaultTo(0)
    t.foreign('user_id').references('users.id').onDelete('CASCADE')
    t.string('destination').notNullable().defaultTo('')
    t.decimal('lat_stay', 11, 8).notNullable().defaultTo(0)
    t.decimal('lng_stay', 11, 8).notNullable().defaultTo(0)
    t.string('q1_transport').notNullable().defaultTo('')
    t.integer('q2_money').notNullable
    t.string('q3_time').notNullable().defaultTo('')
    t.string('q4_interests').notNullable().defaultTo('')
    t.integer('itin_id').notNullable().defaultTo(0)
    t.foreign('itin_id').references('itin.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
};
