import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const HOST = process.env.DB_HOST || 5000;
const PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const db = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  port: PORT,
  logging: false,
  pool: {
    max: 3,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
