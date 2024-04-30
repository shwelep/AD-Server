const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Ads = require("./Ads");

const Campaigns = sequelize.define("campaigns", {
  CampaignID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  AdID: {
    type: DataTypes.INTEGER,
    references: {
      model: Ads,
      key: "AdID",
    },
  },
  CampaignName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Offer:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  OfferImpression:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Status:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  DateStarted:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  DateStopped:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  budget: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = Campaigns;
