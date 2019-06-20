exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", function(table) {
    table.increments("id").primary;
    table.string("type");
    table.string("slogan");
    table.string("color");
    table.integer("price");
    table.string("size");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products");
};
