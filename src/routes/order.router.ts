var express = require('express');
var router = express.Router();

const orderController = require('../controllers/order.controller')

//Métodos para renderizar as páginas
router.get('/admin/order', orderController.getAllOrdersPage)
router.get('/cart', orderController.userCartPage)

//Métodos que fazem alterações
router.post('/user/createOrder', orderController.create)
router.post('/order/addProduct/:id', orderController.addProductOrder)
router.post('/order/removeProduct/:id', orderController.removeCartProduct)

//API
router.put('/update', orderController.update)
router.delete('/delete', orderController.delete)
router.get('/getById/:id', orderController.getById)
router.get('/getByUserId/:id', orderController.getByUserId)

module.exports = router;
