const express = require('express');
const DiscountController = require('../controllers/discount.controller')
const ProductController = require('../controllers/product.controller')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works!');
});
router.get('/products', ProductController.getAllProducts)
router.get('/discounts', DiscountController.getAllDiscounts)
router.get('/discounts/:brand', DiscountController.getDiscount)

module.exports = router;