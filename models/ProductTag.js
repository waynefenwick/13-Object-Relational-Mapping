const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initializes ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// Sets up fields and rules for ProductTag model
ProductTag.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id',
        }
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        }
      }
  },
  {
    // Links to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
