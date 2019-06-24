const connection = require("./connection");
const knex = require("knex");

function getSampleProduct(testDb) {
  const db = testDb || connection;
  return db("sampleProduct").select();
}

module.exports = {
  getSampleProduct
};
