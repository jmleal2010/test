const express = require('express')
const router = express.Router()

const productRoutes = require('../apiServices/product/routes');

router.use('/products', productRoutes);

module.exports = router
