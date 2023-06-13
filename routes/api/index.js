const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const tagRoutes = require('./tag-routes');
const productRoutes = require('./product-routes');

router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);
router.use('/products', productRoutes);


module.exports = router;
