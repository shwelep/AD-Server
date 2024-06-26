const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Advertiser = sequelize.define("advertisers", {
  advertiser_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "UserID",
    },
  },
  advertiser_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
  },
  budget: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
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
