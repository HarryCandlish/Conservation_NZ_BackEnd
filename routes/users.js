const express = require("express");
const db = require("../db/users");
const router = express.Router();

router.use(express.json());

const { getUserByUsername } = require("../db/users");

// GET /api/v1/users
router.get("/:user_name", (req, res) => {
  getUserByUsername(req.params.user_name)
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

module.exports = router;
