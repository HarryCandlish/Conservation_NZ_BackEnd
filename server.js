const express = require("express");

const app = express();

app.get(`/api/stats`, (req, res) => {
  const stats = [
    {
      id: 1,
      type: "Anxiety",
      description: "Elavated Stress",
      preventions: "Long walks"
    },
    {
      id: 2,
      type: "Depression",
      description: "Sadness",
      preventions: "Meditation"
    },
    {
      id: 3,
      type: "Suicide",
      description: "Commit suicide",
      prevention: "Faith that things will get better"
    }
  ];
  res.json(stats);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
