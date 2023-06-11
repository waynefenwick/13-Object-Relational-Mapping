// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Product belongsTo Category
Product.belongsTo(Category, { 
  foreignKey: 'category_id',
  as: 'product_category',
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'category_products',
  // onDelete: 'CASCADE',
});

// Product belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  as: 'product_tags',
});

// Tag belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  as: 'tag_products',
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};

