var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth.middleware');

const categoryController = require('../controllers/category.controller')

//Métodos para renderizar as páginas
router.get('/admin/category/', auth.verifyToken, categoryController.getAllCategoriesPage)
router.get('/admin/category/create', auth.verifyToken, categoryController.createCategoryPage)
router.get('/admin/category/update/:id', auth.verifyToken, categoryController.updateCategoryPage)
router.get('/admin/category/delete/:id', auth.verifyToken, categoryController.deleteCategoryPage)

//Métodos que fazem alterações nos banco de dados
router.post('/admin/category/create', auth.verifyToken, categoryController.create)
router.post('/admin/category/update', auth.verifyToken, categoryController.update)
router.post('/admin/category/delete', auth.verifyToken, categoryController.delete)

module.exports = router;
