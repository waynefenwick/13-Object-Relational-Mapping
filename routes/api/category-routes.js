const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all ('/') categories (insomnia address for example: http://localhost:3001/api/categories)
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error1' });
  }
});

 // Get category by id ('/:id); (insomnia address for http://localhost:3001/api/categories/1...where :id is replaced by the category id number)
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'products',
        },
      ],
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error2' });
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error3' });
  }
});

// Update a category by id
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.update(req.body);
      res.json(category);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error4' });
  }
});

// Delete a category by id
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.destroy();
      res.json({ message: 'Category deleted' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error5' });
  }
});

module.exports = router;
