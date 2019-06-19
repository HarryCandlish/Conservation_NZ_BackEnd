const express = require("express");

const app = express();

app.get(`/api/events`, (req, res) => {
  const events = [
    {
      id: 1,
      type: "Meetups",
      description: "Meetups occur around the city",
      location: "Wellington",
      time: "25/6/2019"
    },
    {
      id: 2,
      type: "Volunteer",
      description: "Red Cross is looking for volunteers",
      location: "Wellington",
      time: "25/6/2019"
    },
    {
      id: 3,
      type: "Lecture",
      description: "Lectures on the mental health crises",
      location: "Wellington",
      time: "25/6/2019"
    }
  ];
  res.json(events);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
