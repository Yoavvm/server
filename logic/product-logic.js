const productDal = require('../dal/product-dal');

const getAllProducts = async () => {
    const successfulGetAllProducts = await productDal.getAllProducts();
    return successfulGetAllProducts;
}

const addProduct = async (payload) => {
    await productDal.addProduct(payload);
}

const updateProduct = async (payload) => {
    await productDal.updateProduct(payload);
}

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct
}
