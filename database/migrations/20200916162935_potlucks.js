exports.up = async function (knex) {
  await knex.schema.createTable("potlucks", (table) => {
    table.increments();
    table.text("username", 50).unique().notNullable();
    table.text("password", 50).notNullable();
    table.text("date").notNullable();
    table.text("location").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("potlucks");
};
