const cartLogic = require('../logic/cart-logic');

const getCartByUserId = async (req, res) => {
    try {
        const cart = await cartLogic.getCartByUserId(req.params.id);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

module.exports = {
    getCartByUserId
}