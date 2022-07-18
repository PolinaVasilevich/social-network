export const config = {
  rethinkdb: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME,
  },
  express: {
    port: process.env.PORT,
  },
};
