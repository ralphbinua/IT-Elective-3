const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProductID, postProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', getProducts);
router.get('/:id', getProductID);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;