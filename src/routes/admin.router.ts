var express = require('express');
var router = express.Router();

const user = require('../controllers/user.controller')
const product = require('../controllers/product.controller')
const category = require('../controllers/category.controller')
const order = require('../controllers/order.controller')

router.get('/login', user.adminLogin)

router.get('/home', user.adminHome)

router.get('/product/', product.getAll)
router.get('/product/create', product.addProductPage)
router.get('/product/update/:id', product.updatePage)
router.get('/product/delete/:id', product.deletePage)

router.get('/category/', category.getAll)
router.get('/category/create', category.addCategoryPage)
router.get('/category/update/:id', category.updatePage)
router.get('/category/delete/:id', category.deletePage)

router.get('/order/', order.getAll)

module.exports = router;