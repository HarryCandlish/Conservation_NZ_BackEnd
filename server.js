const express = require("express");

const app = express();

app.get(`/api/tshirts`, (req, res) => {
  const tshirts = [
    {
      id: 1,
      type: "T-Shirt",
      slogan: "'Hope and All...'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 2,
      type: "Longsleeve",
      slogan: "'Nothing Init'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 3,
      type: "T-Shirt",
      slogan: "'Live with Ailments'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 4,
      type: "T-Shirt",
      slogan: "'Ain't No Thing",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 5,
      type: "Longsleeve",
      slogan: "'Love Just Love'",
      price: "$20",
      size: "M, L, S"
    },
    {
      id: 6,
      type: "Longsleeve",
      slogan: "'All Is Well'",
      price: "$20",
      size: "M, L, S"
    }
  ];
  res.json(tshirts);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
