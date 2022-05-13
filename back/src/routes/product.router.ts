var express = require('express');
var router = express.Router();

const productController = require('../controllers/product.controller')

router.post('/create', productController.create)

router.get('/getAll', productController.getAll)

router.put('/update', productController.update)

router.delete('/delete', productController.delete)

router.get('/getById/:id', productController.getById)

router.get('/getByCategory/:id', productController.getByCategory)

module.exports = router;
