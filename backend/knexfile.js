import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "mysql",
    connection: {
      host: process.env.host,
      port: process.env.port,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/development",
    },
  },
};
