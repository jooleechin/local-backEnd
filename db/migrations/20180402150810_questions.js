
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (t) => {
    t.increments()
    t.integer('user_id').notNullable().defaultTo(0)
    t.foreign('user_id').references('users.id').onDelete('CASCADE')
    t.string('destination').notNullable().defaultTo('')
    t.string('latlang_stay').notNullable().defaultTo('')
    t.string('q1_transport').notNullable().defaultTo('')
    t.string('q2_time').notNullable().defaultTo('')
    t.string('q3_interests').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
};
