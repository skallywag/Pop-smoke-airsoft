import { UserController } from "../controllers/userService.controller";

const userRoutes = (app: any) => {
  const user = UserController;
  var router = require("express").Router();

  router.post("/login", user.userLogin);
  router.get("/operators", user.getAll);

  app.use("/api/user", router);
};

export default userRoutes;
