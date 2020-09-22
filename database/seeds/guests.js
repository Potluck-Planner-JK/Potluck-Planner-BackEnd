exports.seed = async function (knex) {
  await knex("guests").truncate();
  await knex("guests").insert([
    { name: "Taylor", email: "test@test.com", item: "Burgers" },
    { name: "Mason", email: "test@test.com", item: "Salad" },
    { name: "Jon", email: "test@test.com", item: "Pasta" },
    { name: "Eric", email: "test@test.com", item: "Pigeons" },
    { name: "Joo Woon", email: "test@test.com", item: "Beer" },
  ]);
};
