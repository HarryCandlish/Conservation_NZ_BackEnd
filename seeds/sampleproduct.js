exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sampleproduct")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("sampleproduct").insert([
        {
          id: 1,
          title: "Shirt",
          designer: "K Norquay",
          details: "Cotton",
          description: "Eco friendly clothing designed and made in New Zealand",
          image: "M, L, S"
        }
      ]);
    });
};
