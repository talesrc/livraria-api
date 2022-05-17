var express = require('express');
var router = express.Router();

const orderController = require('../controllers/order.controller')

router.post('/create', orderController.create)

router.get('/getAll', orderController.getAll)

router.put('/update', orderController.update)

router.delete('/delete', orderController.delete)

router.get('/getById/:id', orderController.getById)

router.get('/getByUserId/:id', orderController.getByUserId)

module.exports = router;
