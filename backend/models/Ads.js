const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Advertiser = require("./Advertiser");

const Ads = sequelize.define("ads", {
  ad_id: {
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
  format: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Ads;
