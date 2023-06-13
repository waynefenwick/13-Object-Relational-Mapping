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

// ProductTag belongsTo Tag
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  as: 'tag',
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products',
});

// Tag belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  otherKey: 'product_id',
  as: 'products',
});

// Product belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  otherKey: 'tag_id',
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
