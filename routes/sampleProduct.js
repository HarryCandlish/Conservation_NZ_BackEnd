const express = require("express");
const router = express.Router();

const { getSampleProduct } = require("../db/sampleProduct");

router.get("/", (req, res) => {
  getSampleProduct()
    .then(sampleProduct => {
      res.json(sampleProduct);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
