const express = require("express");
const router = express.Router();

const { getPhilosophies, getOnePhilosophy } = require("../db/products");

router.get("/", (req, res) => {
  getPhilosophies()
    .then(philosophies => {
      res.json(philosophies);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

router.get("/philosophy/:id", (req, res) => {
  const philosophyId = req.params.id;
  getOnePhilosophy(philosophyId)
    .then(philosophy => {
      res.json(philosophy);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
