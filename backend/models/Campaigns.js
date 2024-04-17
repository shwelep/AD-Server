const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Advertiser = require("./Advertiser");

const Campaigns = sequelize.define("campaigns", {
  campaign_id: {
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
  budget: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = Campaigns;
