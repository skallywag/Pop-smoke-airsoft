module.exports = (app) => {
  const user = require("../controllers/userService.controller.js");
  var router = require("express").Router();

  router.get("/login", user.userLogin);
  router.get("/operators", user.getAll);

  app.use("/api/user", router);
};
