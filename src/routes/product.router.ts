import { User } from "../models/user.model";

var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth.middleware');
const productController = require('../controllers/product.controller')

//Métodos para renderizar as páginas
router.get('/mainHome', productController.userGetAllProductsPage)
router.get('/admin/product/', auth.verifyAdminToken, productController.adminGetAllProductsPage)
router.get('/admin/product/create', auth.verifyAdminToken, productController.createProductPage)
router.get('/admin/product/update/:id', auth.verifyAdminToken, productController.updateProductPage)
router.get('/admin/product/delete/:id', auth.verifyAdminToken, productController.deleteProductPage)
router.get('/product/:id', productController.productPage)

//Métodos que fazem alterações nos banco de dados
router.post('/admin/product/create', auth.verifyAdminToken, productController.create)
router.post('/admin/product/update', auth.verifyAdminToken, productController.update)
router.post('/admin/product/delete', auth.verifyAdminToken, productController.delete)

module.exports = router;
