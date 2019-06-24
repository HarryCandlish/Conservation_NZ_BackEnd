exports.up = function(knex, Promise) {
  return knex.schema.createTable("sampleproduct", function(table) {
    table.increments("id").primary;
    table.string("title");
    table.string("designer");
    table.string("details");
    table.string("description");
    table.string("./tshirt");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("sampleproduct");
};
