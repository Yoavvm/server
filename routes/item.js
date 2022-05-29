const itemController = require('../controllers/item-controller');

const router = require('express').Router();

router.get('/:id', itemController.getItemsByCartId);
// router.post('/', itemController.addProduct);
// router.patch('/', itemController.updateProduct);

module.exports = router;