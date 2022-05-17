var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/category.controller')

router.post('/create', categoryController.create)

router.get('/getAll', categoryController.getAll)

router.post('/update', categoryController.update)

router.post('/delete', categoryController.delete)

//router.get('/getById/:id', categoryController.getById)

module.exports = router;
