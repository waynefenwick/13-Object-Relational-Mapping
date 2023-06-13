// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Product belongsTo Category
Product.belongsTo(Category, { 
  foreignKey: 'category_id',
  as: 'category',
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products',
  // onDelete: 'CASCADE',
});

// Product belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  as: 'tags', // Update the alias to 'tags'
});

// Tag belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  as: 'tags', // Update the alias to 'tags'
});


module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};

