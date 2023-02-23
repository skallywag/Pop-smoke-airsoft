module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("operators", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    createdat: {
      type: Sequelize.DATE,
    },
    updatedat: {
      type: Sequelize.DATE,
    },
  });

  return User;
};
