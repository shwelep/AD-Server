const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "root",
    database: "ad_server",
    dialect: "mysql"
})

module.exports = sequelize;





