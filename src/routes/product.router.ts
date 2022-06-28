import { User } from "../models/user.model";

var express = require('express');
var router = express.Router();

const productController = require('../controllers/product.controller')

const { validateToken } = require('../middlewares/auth.middleware');
const { cache } = require('../middlewares/cache.middleware');
const image = require('../middlewares/image.middleware');


//Métodos para renderizar as páginas
router.get('/admin/product/', [validateToken, cache], productController.adminGetAllProductsPage)
router.get('/admin/product/create', [validateToken, cache], productController.createProductPage)
router.get('/admin/product/update/:id', [validateToken, cache], productController.updateProductPage)
router.get('/admin/product/delete/:id', [validateToken, cache], productController.deleteProductPage)
router.get('/product/:id', [validateToken, cache], productController.productPage)
router.get('/', [validateToken, cache], productController.userGetAllProductsPage)

//Métodos que fazem alterações nos banco de dados
router.post('/admin/product/create', [validateToken, image.upload.single('image')], productController.create)
router.post('/admin/product/update', validateToken, productController.update)
router.post('/admin/product/delete', validateToken, productController.delete)

module.exports = router;
