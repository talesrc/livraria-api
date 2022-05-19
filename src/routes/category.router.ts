var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth.middleware');

const categoryController = require('../controllers/category.controller')

//Métodos para renderizar as páginas
router.get('/admin/category/', auth.verifyAdminToken, categoryController.getAllCategoriesPage)
router.get('/admin/category/create', auth.verifyAdminToken, categoryController.createCategoryPage)
router.get('/admin/category/update/:id', auth.verifyAdminToken, categoryController.updateCategoryPage)
router.get('/admin/category/delete/:id', auth.verifyAdminToken, categoryController.deleteCategoryPage)

//Métodos que fazem alterações nos banco de dados
router.post('/admin/category/create', auth.verifyAdminToken, categoryController.create)
router.post('/admin/category/update', auth.verifyAdminToken, categoryController.update)
router.post('/admin/category/delete', auth.verifyAdminToken, categoryController.delete)

module.exports = router;
