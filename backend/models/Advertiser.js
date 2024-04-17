const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Advertiser = sequelize.define("advertiser", {
  advertiser_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  advertiser_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Advertiser.associate = (models) => {
  Advertiser.hasMany(models.Campaigns, {
    foreignKey: "advertiser_id",
    sourceKey: "advertiser_id",
  });
  Advertiser.hasMany(models.Ads, {
    foreignKey: "advertiser_id",
    sourceKey: "advertiser_id",
  });
}

module.exports = Advertiser;
