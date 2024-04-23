const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Advertiser = require("./Advertiser");

const Ads = sequelize.define("ads", {
  Ad_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  advertiser_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Advertiser,
      key: "advertiser_id",
    },
  },
  Ad_Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Ad_Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  Ad_Duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  Geography: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  Ad_Frequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  Ad_Placement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Timing: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Channel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Format: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Ads;
