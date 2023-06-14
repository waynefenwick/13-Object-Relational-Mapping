const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Product = require('./Product');

// Initializes Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Sets up fields and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tagName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },

  // Links to database connection
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
