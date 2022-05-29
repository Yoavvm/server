const cartDal = require('../dal/cart-dal');

const getCartByUserId = async (id) => {
    const cart = await cartDal.getCartByUserId(id);
    return cart;
}

module.exports = {
    getCartByUserId
}