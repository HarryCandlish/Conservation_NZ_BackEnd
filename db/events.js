const connection = require("./connection");
const knex = require("knex");

function getEvents(testDb) {
  const db = testDb || connection;
  return db("events").select();
}

function getOneEvent(id, testDb) {
  const db = testDb || connection;
  return db("events")
    .where("id", id)
    .first();
}

module.exports = {
  getEvents,
  getOneEvent
};
