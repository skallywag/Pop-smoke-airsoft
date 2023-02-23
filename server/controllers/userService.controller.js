const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const db = require("../models/index");

module.exports = {
  userLogin: async (req, res) => {
    try {
    } catch (error) {}
  },

  getAll: async (req, res) => {
    try {
      const response = await db.sequelize.query(`SELECT * FROM operators`);
      res.send(response[0][0]);
      console.log(response);
    } catch (error) {
      res.send(error);
    }
  },
};
