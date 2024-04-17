const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Publisher = sequelize.define("publisher", {
    publisher_id: {
        type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  publisher_name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  web_url:{
    type: DataTypes.STRING,
    allowNull: false,
},
});

module.exports = Publisher;