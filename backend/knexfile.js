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
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/development",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/staging",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/production",
    },
  },
};
