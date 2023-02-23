const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("operators", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return User;
};
