import db from "../models/index";

export const UserController = {
  userLogin: async (req: any, res: any) => {
    console.log(req.body);
    try {
      res.send(req.body);
      const response = await db.sequelize.query("");
    } catch (error) {
      res.send(error);
    }
  },

  getAll: async (req: any, res: any) => {
    try {
      const response = await db.sequelize.query(`SELECT * FROM operators`);
      res.send(response[0][0]);
      console.log(response);
    } catch (error) {
      res.send(error);
    }
  },
};
