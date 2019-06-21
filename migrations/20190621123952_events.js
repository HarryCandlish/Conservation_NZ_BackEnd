exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("location");
    table.string("description", 1000);
    table.bigint("date");
    table.boolean("is_open");
    table.string("type");
    table.string("image", 1000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events");
};
