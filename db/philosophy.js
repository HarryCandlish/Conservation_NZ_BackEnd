const connection = require("./connection");
const knex = require("knex");

function getPhilosophies(testDb) {
  const db = testDb || connection;
  return db("philosophies").select();
}

function getOnePhilosophy(id, testDb) {
  const db = testDb || connection;
  return db("philosophies")
    .where("id", id)
    .first();
}

module.exports = {
  getPhilosophies,
  getOnePhilosophy
};
