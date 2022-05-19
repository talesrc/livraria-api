import { User } from "../models/user.model";

var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth.middleware');
const productController = require('../controllers/product.controller')

//Métodos para renderizar as páginas
router.get('/mainHome', productController.userGetAllProductsPage)
router.get('/admin/product/', auth.verifyToken, productController.adminGetAllProductsPage)
router.get('/admin/product/create', auth.verifyToken, productController.createProductPage)
router.get('/admin/product/update/:id', auth.verifyToken, productController.updateProductPage)
router.get('/admin/product/delete/:id', auth.verifyToken, productController.deleteProductPage)

//Métodos que fazem alterações nos banco de dados
router.post('/admin/product/create', auth.verifyToken, productController.create)
router.post('/admin/product/update', auth.verifyToken, productController.update)
router.post('/admin/product/delete', auth.verifyToken, productController.delete)

module.exports = router;
