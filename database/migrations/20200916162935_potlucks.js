exports.up = async function (knex) {
  await knex.schema.createTable("potlucks", (table) => {
    table.incraments();
    table.text("username").unique().notNullable();
    table.text("password").notNullable();
    table.text("date/time").notNullable();
    table.text("location").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("potlucks");
};
