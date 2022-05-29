const { Cart } = require('../db/models');

const getCartByUserId = async (id) => {
    const cart = await Cart.find({userId: id});
    return cart;
}

module.exports = {
    getCartByUserId
}