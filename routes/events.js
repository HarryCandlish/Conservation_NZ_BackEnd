const express = require("express");
const router = express.Router();

const { getEvents, getOneEvent } = require("../db/events");

router.get("/", (req, res) => {
  getEvents()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

router.get("/event/:id", (req, res) => {
  const eventId = req.params.id;
  getOneEvent(eventId)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
