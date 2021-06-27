require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.PG_DATABASE_HOST,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB_NAME,
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
