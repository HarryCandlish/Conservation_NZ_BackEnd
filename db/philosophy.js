const connection = require("./connection");
const knex = require("knex");

function getPhilosophy(testDb) {
  const db = testDb || connection;
  return db("philosophy").select();
}

function getOnePhilosophy(id, testDb) {
  const db = testDb || connection;
  return db("philosophy")
    .where("id", id)
    .first();
}

module.exports = {
  getPhilosophy,
  getOnePhilosophy
};
