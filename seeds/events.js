exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          id: 1,
          name: "Meetup",
          location: "Customs",
          description: "Coffee meetup",
          date: 1551598786956,
          is_open: "true",
          type: "Quick",
          image: "/"
        },
        {
          id: 2,
          name: "Discussion",
          location: "Midnight Expresso",
          description:
            "A discussion event for discussing the mental health crises in Wellington",
          date: 1551314863037,
          is_open: "true",
          type: "Evening discussion",
          image: "/"
        },
        {
          id: 3,
          name: "Lecture",
          location: "Victoria University",
          description:
            "A lecture which talks through the history of mental illness",
          date: 1551314863037,
          is_open: "true",
          type: "Lecture",
          image: "/"
        },
        {
          id: 4,
          name: "Volunteering",
          location: "Wellington",
          description: "Volunteering around greater Wellington",
          date: 1551314863037,
          is_open: "true",
          type: "Volunteering",
          image: "/"
        },
        {
          id: 5,
          name: "Community Clean Up",
          location: "Owhero Bay",
          description: "Beach Clean",
          date: 1551314863037,
          is_open: "true",
          type: "Volunteering",
          image: "/"
        },
        {
          id: 6,
          name: "Art Gallery",
          location: "Gallery",
          description: "Art therapy",
          date: 1551314863037,
          is_open: "true",
          type: "Art",
          image: "/"
        }
      ]);
    });
};
