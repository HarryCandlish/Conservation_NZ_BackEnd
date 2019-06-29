exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("store")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("store").insert([
        {
          id: 1,
          type: "T-Shirt",
          color: "Black",
          image: "./tshirt",
          price: "$20",
          size: "M, L, S"
        },
        {
          id: 2,
          type: "Longsleeve",
          color: "White",
          image: "./tshirt",
          price: "$20",
          size: "M, L, S"
        },
        {
          id: 3,
          type: "T-Shirt",
          color: "Red",
          image: "./tshirt",
          price: "$20",
          size: "M, L, S"
        },
        {
          id: 4,
          type: "T-Shirt",
          color: "White",
          image: "./tshirt",
          price: "$20",
          size: "M, L, S"
        },
        {
          id: 5,
          type: "T-Shirt",
          color: "Blue",
          image: "./tshirt",
          price: "$20",
          size: "M, L, S"
        },
        {
          id: 6,
          type: "Longsleeve",
          color: "Black",
          image: "./tshirt",
          price: "$20",
          size: "M, L, S"
        }
      ]);
    });
};
