const express = require("express");
const router = express.Router();

const { getStore, getOneStoreItem } = require("../db/store");

router.get("/", (req, res) => {
  getStore()
    .then(store => {
      res.json(store);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

router.get("/store/:id", (req, res) => {
  const storeId = req.params.id;
  getOneStoreItem(storeId)
    .then(store => {
      res.json(store);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
