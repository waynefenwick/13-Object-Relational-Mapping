const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          as: 'tag_products', // Use the correct alias 'tag_products' here
          through: ProductTag,
          attributes: ['id', 'product_name'],
        },
      ],
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error1' });
  }
});

// Get a single tag by it's id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'tag_products', // Use the correct alias 'tag_products' here
          through: ProductTag,
          attributes: ['id', 'product_name'],
        },
      ],
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error2' });
  }
});

// Create a new tag
  router.post('/', async (req, res) => {
    try {
      const tag = await Tag.create(req.body);
      res.status(201).json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Update a tag's name by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const tag = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (tag[0] === 0) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error3' });
    }
  });

// Delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error4' });
  }
});

module.exports = router;
