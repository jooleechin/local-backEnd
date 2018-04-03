
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (t) => {
    t.increments()
    t.integer('user_id').notNullable().defaultTo(0)
    t.foreign('user_id').references('users.id').onDelete('CASCADE')
    t.string('q1').notNullable().defaultTo('')
    t.string('q2').notNullable().defaultTo('')
    t.string('q3').notNullable().defaultTo('')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
};
