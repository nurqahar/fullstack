import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "mysql",
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/development",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/staging",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/production",
    },
  },
};
