const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Advertiser = require("./Advertiser");

const Bids = sequelize.define("bids", {
    BidID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    AdvertiserID: {
        type: DataTypes.INTEGER,
        references: {
            model: Advertiser,
            key: "AdvertiserID",
        },
    },
    Channel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BidPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
});

module.exports = Bids;