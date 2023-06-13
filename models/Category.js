const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initializes Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// Sets up fields and rules for Category model
Category.init(
  {
    // define columns -- see sequalize documentation (https://sequelize.org/)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Links to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
