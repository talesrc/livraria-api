import { User } from "../models/user.model";

var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller')

//Métodos para renderizar as páginas
router.get('/admin/menu', auth.verifyAdminToken, userController.adminMenu)
router.get('/admin/login', userController.adminLoginPage)
router.get('/admin/signUpAdmin', userController.signUpAdminPage)
router.get('/admin/withoutAuth', userController.adminWithoutAuth)
router.get('/withoutAuth', userController.adminWithoutAuth)
router.get('/login', userController.loginUserPage)
router.get('/signUp', userController.signUpUserPage)

//Métodos que fazem alterações nos banco de dados
router.post('/admin/login', userController.loginAdmin)
router.post('/admin/register', userController.createAdmin)
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router;
