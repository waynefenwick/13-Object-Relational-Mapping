const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Get all ('/') products (insomnia address for example: http://localhost:3001/api/products)
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
          model: Category,
          as: 'category',
        },
        {
          model: Tag,
          as: 'tags',
          through: ProductTag,
          attributes: ['id', 'tag_name'],
        },
      ],
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error1' });
  }
});

 // Get product by id ('/:id); (insomnia address for http://localhost:3001/api/products/1...where :id is replaced by the product id number)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Category,
          as: 'category',
        },
      ],
    });
    if (!product) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error2' });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Update a product by its `id`
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (affectedRows === 0) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      await Promise.all([
        ProductTag.destroy({
          where: { product_id: req.params.id },
        }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Delete a product by its `id`
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!deletedProduct) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error3' });
  }
});

module.exports = router;
