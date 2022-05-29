const { Item } = require('../db/models');

const getItemsByCartId = async (id) => {
    const cart = await Item.find({cartId: id});
    return cart;
}

module.exports = {
    getItemsByCartId
}