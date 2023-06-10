require('dotenv').config(); // Load the environment variables from .env file

const express = require('express');
const { Sequelize } = require('sequelize');
const routes = require('./routes');
const { Product, Category, Tag, ProductTag } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

// Initialize the models
Product.init(sequelize);
Category.init(sequelize);
Tag.init(sequelize);
ProductTag.init(sequelize);

// Define associations between the models
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Category.hasMany(Product, { foreignKey: 'category_id', as: 'products' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id', as: 'tags' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id', as: 'products' });

// Sync models with the database
sequelize.sync({ force: false }).then(() => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch((error) => {
  console.error('Unable to sync database:', error);
});
