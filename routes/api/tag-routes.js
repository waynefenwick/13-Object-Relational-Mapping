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
          as: 'products',
        },
      ],
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single tag by it's id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'products',
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
      res.status(500).json({ message: 'Server error' });
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
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
