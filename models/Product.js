const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initializes Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Sets up fields and rules for Product model
Product.init(
  {
    // define columns -- see sequalize documentation (https://sequelize.org/)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
      isDecimal: true,
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
      isNumeric: true,
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
      model: 'category',
      key: 'id',
      }
    },
  },
  {
    // Links to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
