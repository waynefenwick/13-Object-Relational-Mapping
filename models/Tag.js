const { Model, DataTypes, STRING } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// 'Tag' belongs to many `Product` models. Allow tags and tags to have many products
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tagId',
  as: 'products',
});

module.exports = Tag;
