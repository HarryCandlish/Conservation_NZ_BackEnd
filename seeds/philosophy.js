exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("philosophy")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("philosophy").insert([
        {
          id: 1,
          title: "Sisyphus",
          details: "influenced by the work of Camus",
          description: "One can image Sisyphus happy"
        },
        {
          id: 2,
          title: "All is Well",
          details: "",
          description:
            "All is Well has a complex history throughout Western thought"
        },
        {
          id: 3,
          title: "Mental Health in the current climate",
          details: "Mental Health in New Zealand",
          description:
            "Mental health problem has to be face and it's key that we fight the imposing issue."
        }
      ]);
    });
};
