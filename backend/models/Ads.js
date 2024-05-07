const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
// const Users = require("./Users");

const Ads = sequelize.define(
  "adverts",
  {
    Ad_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // UserID: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Users,
    //     key: "advertiser_id",
    //   },
    // },
    Ad_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ad_Type: {
      type: DataTypes.ENUM("Image", "Video", "Pop-up"),
      allowNull: false,
    },
    Ad_Size: {
      type: DataTypes.ENUM(
        "Banner (468 x 60)",
        "Leaderboard Banner (728 x 90)",
        "Large Leaderboard (970 x 90)",
        "Mobile Leaderboard (320 x 50)",
        "Square (250 x 250)",
        "Small Square (200 x 200)",
        "Medium Rectangle (300 x 250)",
        "Large Rectangle (336 x 280)",
        "Skyscraper (120 x 600)",
        "Wide Skyscraper (160 x 600)",
        "Large Skyscraper (300 x 600)",
        "Potrait (300 x 1050)",
        "Vertical Banner (120 x 240)",
        "Billboard (970 x 250)"
      ),
      allowNull: false,
    },
    Ad_Path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ad_Duration: {
      type: DataTypes.ENUM('1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '1 week', '2 weeks', '3 weeks', '1 month', '2 months', '3 months', '4 months', '5 months', '6 months'),
      allowNull: false,
    },

    Geography: {
      type: DataTypes.ENUM('Angola', 'Botswana', 'Comoros', 'Democratic Republic of Congo', 'Eswatini', 'Lesotho', 'Madagascar', 'Malawi', 'Mauritius', 'Mozambique', 'Namibia', 'Seychelles', 'South Africa', 'Tanzania', 'Zambia', 'Zimbabwe'),
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
  },
  {
    timestamps: false,
  }
);

module.exports = Ads;
