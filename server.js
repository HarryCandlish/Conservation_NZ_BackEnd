const express = require("express");

const app = express();

app.get(`/api/tshirts`, (req, res) => {
  const tshirts = [
    {
      id: 1,
      type: "T-Shirt",
      slogan: "'Hope and All - All that Jazz'",
      price: "$20"
    },
    {
      id: 2,
      type: "Longsleeve",
      slogan: "'Nothing Init'",
      price: "$20"
    },
    {
      id: 3,
      type: "T-Shirt",
      slogan: "'Live with Your Ailments'",
      price: "$20"
    }
  ];
  res.json(tshirts);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
