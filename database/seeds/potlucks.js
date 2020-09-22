exports.seed = async function (knex) {
  await knex("potlucks").truncate();
  await knex("potlucks").insert([
    {
      username: "Taylor123",
      password: "test123",
      date: "Today",
      location: "The Office",
    },
    {
      username: "Mason123",
      password: "test123",
      date: "Tomorrow",
      location: "The Park",
    },
    {
      username: "Jon123",
      password: "test123",
      date: "9/21/2021",
      location: "The Bathroom",
    },
  ]);
};
