
exports.up = function(knex, Promise) {
  return knex.schema.createTable('itin', (t) => {
    t.increments()
    t.string('name').notNullable().defaultTo('')
    t.integer('user_id').notNullable()
    t.foreign('user_id').references('users.id').onDelete('CASCADE')
    t.date('itin_date').notNullable().defaultTo(knex.fn.now()),
    t.string('destination').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('itin')
};
