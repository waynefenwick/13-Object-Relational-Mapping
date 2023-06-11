const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection.js');
const Product = require('./Product');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tagName: {
      type: STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  }
);

// 'Tag' belongs to many `Product` models. Allow tags and tags to have many products
// Tag.belongsToMany(Product, {
//   through: 'ProductTag',
//   foreignKey: 'tag_id',
//   as: 'products'
// });

module.exports = Tag;
