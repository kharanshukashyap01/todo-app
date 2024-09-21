const { Sequelize } = require("sequelize");

// MySQL database
const sequelize = new Sequelize("todo_db", "root", "Kharanshu23", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
