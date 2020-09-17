exports.up = async function (knex) {
  await knex.schema.createTable("guests", (table) => {
    table.incraments();
    table.text("name").unique().notNullable();
    table.text("email").notNullable();
    table.text("item").notNullabe();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("potlucks");
};
