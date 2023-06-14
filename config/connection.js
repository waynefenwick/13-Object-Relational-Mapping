const Sequelize = require('sequelize');
require('dotenv').config();

// Sequelize "stands between" you and your db
// Sequelize is the key to open the door to your db
// Sequelize serves as a "user friendly" "go-between" between you and your db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
      decimalNumbers: true,
      },
    });

module.exports = sequelize; 

