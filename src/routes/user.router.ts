import { User } from "../models/user.model";

var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller')

//Métodos para renderizar as páginas
router.get('/admin/menu', auth.verifyToken, userController.adminMenu)
router.get('/admin/login', userController.adminLoginPage)
router.get('/admin/signUpAdmin', userController.signUpAdminPage)
router.get('/admin/withoutAuth', userController.adminWithoutAuth)
router.get('/signUpUser', userController.signUpUserPage)
router.get('/', userController.homePage)


//Métodos que fazem alterações nos banco de dados
router.post('/admin/login', userController.loginAdmin)
router.post('/admin/register', userController.createAdmin)
router.post('/register', userController.createUser)

module.exports = router;
