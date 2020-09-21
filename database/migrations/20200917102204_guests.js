exports.up = async function (knex) {
  await knex.schema.createTable("guests", (table) => {
    table.increments();
    table.text("name", 50).unique().notNullable();
    table.text("email").nullable();
    table.text("item").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("guests");
};
