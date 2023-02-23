import dbConfig from "../config/db.config";
import userModel from "./user.model";
import * as Sequelize from "sequelize";

export const sequelize = new Sequelize.Sequelize(
  (process.env.DB_NAME = "db-name"),
  (process.env.DB_USER = "db-user"),
  (process.env.DB_PASSWORD = "db-password"),
  {
    port: Number(process.env.DB_PORT) || 54320,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);
const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.user = require("./user.model.ts")(sequelize, Sequelize);
db.user = userModel(sequelize, Sequelize);

export default db;
