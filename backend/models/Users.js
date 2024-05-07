const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define(
  "users",
  {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
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
    UserType: {
      type: DataTypes.ENUM("publisher", "advertiser"),
      allowNull: false,
    },
  },
  {
    timestamps: false, // Ensure automatic timestamps are disabled
  }
);

Users.associate = (models) => {
  Users.hasMany(models.Publisher, {
    foreignKey: "UserID",
    sourceKey: "UserID",
  });
  Users.hasMany(models.Advertiser, {
    foreignKey: "UserID",
    sourceKey: "UserID",
  });
};

module.exports = Users;
