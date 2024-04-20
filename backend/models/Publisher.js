const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Publisher = sequelize.define("publisher", {
    PublisherID: {
        type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PublisherName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  WebUrl:{
    type: DataTypes.STRING,
    allowNull: false,
},
});

module.exports = Publisher;