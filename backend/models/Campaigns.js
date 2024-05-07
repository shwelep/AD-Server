const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Ads = require("./Ads");

const Campaigns = sequelize.define("campaigns", {
  CampaignID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Ad_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: Ads,
      key: "advertiser_id",
    },
  },
  CampaignName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  CampaignType:{
    type: DataTypes.ENUM('Games','Stationary','Transport Services','Fashion','Furniture','Sports/Gym','Food','Technology','Travel','Books'),
    allowNull: false,
  },
  Channel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Offer:{
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  OfferImpression:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  Status:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  DateStarted:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  DateStopped:{
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  budget: {
    type: DataTypes.FLOAT,
    allowNull: true,
  }
},
{
  timestamps: false, // Ensure automatic timestamps are disabled
});

module.exports = Campaigns;
