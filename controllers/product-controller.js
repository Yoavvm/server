const productLogic = require('../logic/product-logic');

const getAllProducts = async (req, res) => {
    try {
        const successfulGetAllProducts = await productLogic.getAllProducts()
        res.json(successfulGetAllProducts);
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });
    }
}

const addProduct = async (req, res) => {
    try {
        await productLogic.addProduct(req.body);
        res.json({error: false, msg: "successful added product"});
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });
    }
}

const updateProduct = async (req, res) => {
    try {
        await productLogic.updateProduct(req.body);
        res.json({error: false, msg: "successful update product"});
    } catch (error) {
        res.status(500).json({ error, msg: "something went wrong" });
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct
}
