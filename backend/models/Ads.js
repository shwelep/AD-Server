const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Advertiser = require("./Advertiser");

const Ads = sequelize.define("ads", {
  AdID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  AdvertiserID: {
    type: DataTypes.INTEGER,
    references: {
      model: Advertiser,
      key: "advertiser_id",
    },
  },
  AdName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AdType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  AdDuration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  Geography: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  AdFrequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  AdPlacement: {
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
