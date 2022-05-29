const itemDal = require('../dal/item-dal');

const getItemsByCartId = async (id) => {
    const cart = await itemDal.getItemsByCartId(id);
    return cart;
}

module.exports = {
    getItemsByCartId
}