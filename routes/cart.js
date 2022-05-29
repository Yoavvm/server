const cartController = require('../controllers/cart-controller');

const router = require('express').Router();

router.get('/:id', cartController.getCartByUserId);

module.exports = router;