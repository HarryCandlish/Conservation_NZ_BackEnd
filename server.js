const express = require("express");

const app = express();

app.get(`/api/animals`, (req, res) => {
  const animals = [
    {
      id: 1,
      type: "Kiwi",
      location: "Upper North Island",
      description: "Cannot fly",
      conservation_status: "Endangered"
    },
    {
      id: 2,
      type: "Kea",
      location: "South Island",
      description: "Can fly",
      conservation_status: "Common"
    },
    {
      id: 3,
      type: "Moa",
      location: "Bottom of South Island",
      description: "was big",
      conservation_status: "Extinct"
    }
  ];
  res.json(animals);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
