const connection = require("./connection");
const knex = require("knex");

function getStore(testDb) {
  const db = testDb || connection;
  return db("store").select();
}

function getOneStoreItem(id, testDb) {
  const db = testDb || connection;
  return db("store")
    .where("id", id)
    .first();
}

module.exports = {
  getStore,
  getOneStoreItem
};
