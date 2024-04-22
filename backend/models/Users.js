const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define("users", {
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
    },
    UserType: {
        type: DataTypes.ENUM('publisher', 'advertiser'),
        allowNull: false,
    },
});

module.exports = Users;