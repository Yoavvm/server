const itemLogic = require('../logic/item-logic');

const getItemsByCartId = async (req, res) => {
    try {
        const cart = await itemLogic.getItemsByCartId(req.params.id);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error, msg: error.message });
    }
}

module.exports = {
    getItemsByCartId
}