exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          id: 1,
          name: "Coffee Catchups",
          location: "Raglan Roast",
          description:
            "Meetup with other Wellingtonians for casual conversation and good coffee, discuss a myriad of topics, this is a relaxed event and is open to avid coffee fans",
          date: 1551598786956,
          is_open: "true",
          type: "Quick",
          image: "/"
        },
        {
          id: 2,
          name: "Pottery Classes",
          location: "Wellington Potters Association",
          description:
            "Evening class which caters to different levels of competency, Friday night club is where you can come together and share wine, food and tips on pottery making",
          date: 1551314863037,
          is_open: "true",
          type: "Evening class",
          image: "/"
        },
        {
          id: 3,
          name: "Mountain Biking Club",
          location: "Start at Mount Victoria",
          description:
            "Meet up with avid mountain bikers in Wellington, starting at the top of Mount Vic and hitting the trails from medium to hard, end the day with a beer or two and some chats",
          date: 1551314863037,
          is_open: "true",
          type: "Whole day",
          image: "/"
        },
        {
          id: 4,
          name: "Language Exchange",
          location: "Wellington Library",
          description:
            "Exchange languages with others, currently we have members from China, England and Germany! Come and pratice a language with us, meeting at Level One of the Library",
          date: 1551314863037,
          is_open: "true",
          type: "Half day",
          image: "/"
        },
        {
          id: 5,
          name: "Plant Exchange",
          location: "Frank Kitts Park",
          description:
            "Plant exhange for those who are interested, come down to Frank Kitts park and bring some plants which you would like to exchange for other plants - mainly for those who propogate plants to share with others",
          date: 1551314863037,
          is_open: "true",
          type: "Morning",
          image: "/"
        },
        {
          id: 6,
          name: "Table Tennis",
          location: "Victoria University",
          description:
            "Table Tennis club is on every Tuesday, open to all levels just bring your bat",
          date: 1551314863037,
          is_open: "true",
          type: "Afternoon",
          image: "/"
        }
      ]);
    });
};
