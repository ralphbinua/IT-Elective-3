const { get } = require('mongoose');
const Product = require("../models/product.model");

// get all products from the database
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// get a single product using id from the database
const getProductID = async (req, res) => {
    try {
            const { id } = req.params;
            const products = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
};


// post to the database
const postProduct = async (req, res) => {
    try {
           const product = await Product.create(req.body);
           res.status(200).json(product);
        } catch (error) {
                res.status(500).json({message: error.message});
        }
};


//update a product using id in the database
const updateProduct = async (req, res) => {
    try {
           const { id } = req.params;
            const products = await Product.findByIdAndUpdate(id, req.body)

            if (!product) {
                return res.status(404).json({message: 'Product not found'});
            }

            const updateProduct = await Product.findById(id);
            res.status(200).json(updateProduct);

        } catch (error) {
                res.status(500).json({message: error.message});
        }
};


// delete a product using id from the database
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        res.status(200).json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
}
};

module.exports = {
    getProducts,
    getProductID,
    postProduct,
    updateProduct,
    deleteProduct
}