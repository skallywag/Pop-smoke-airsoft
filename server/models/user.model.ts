const { DataTypes } = require("sequelize");

export interface UserAttributes {}

const sequelizer = (sequelize: any, Sequelize: any): any => {
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

export default sequelizer;
