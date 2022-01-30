const router = require('express').Router();
const userroutes = require('./userroutes');
//const productRoutes = require('./product-routes');
//const tagRoutes = require('./tag-routes');

router.use('/user', userroutes);
//router.use('/products', productRoutes);
//router.use('/tags', tagRoutes);

module.exports = router;
