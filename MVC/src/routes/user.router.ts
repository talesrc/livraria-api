var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')

router.post('/register', userController.create)

router.get('/getAll', userController.getAll)

router.put('/update', userController.update)

router.delete('/delete', userController.delete)

router.get('/getByCPF/:cpf', userController.getByCPF)

router.post('/login/', userController.login)

module.exports = router;
