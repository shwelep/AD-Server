const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Publisher = sequelize.define("publishers", {
  publisher_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "UserID",
    },
  },
  publisher_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  web_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Publisher;
