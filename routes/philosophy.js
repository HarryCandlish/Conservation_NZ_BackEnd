const express = require("express");
const router = express.Router();

const { getPhilosophy, getOnePhilosophy } = require("../db/philosophy");

router.get("/", (req, res) => {
  getPhilosophy()
    .then(philosophy => {
      res.json(philosophy);
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
