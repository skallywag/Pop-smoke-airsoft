import dbConfig from "../config/db.config";
// import userModel from "./user.model";
import * as Sequelize from "sequelize";

export const sequelize =
  (dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  });

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.user = require("./user.model.ts")(sequelize, Sequelize);
// db.user = userModel(sequelize, Sequelize);

export default db;
