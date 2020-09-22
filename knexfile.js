// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./database/data.db3",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: "./database/data.db3",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: 
      pgConnection
   ,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
min: 2,
max:10,
    },
  }
};
