const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all ('/') tags (insomnia address for example: http://localhost:3001/api/tags)
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          as: 'products',
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

// Get tags by id (insomnia address for example: http://localhost:3001/api/1)
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'products',
          through: ProductTag,
        },
      ],
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
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
