const express = require("express");
const knex = require("./knex.js/index.js");

const app = express();

app.get(`/api/tshirts`, (req, res) => {
  const tshirts = [
    {
      id: 1,
      type: "T-Shirt",
      color: "Black",
      slogan: "'All is Well...'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 2,
      type: "Longsleeve",
      color: "White",
      slogan: "'All is Well...'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 3,
      type: "T-Shirt",
      color: "Red",
      slogan: "'All is Well...'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 4,
      type: "T-Shirt",
      color: "White",
      slogan: "'All is Well...",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 5,
      type: "T-Shirt",
      color: "Blue",
      slogan: "'All is Well...",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 6,
      type: "Longsleeve",
      color: "Black",
      slogan: "'All is Well...",
      price: "$20",
      size: "M, L, S"
    }
  ];
  res.json(tshirts);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
