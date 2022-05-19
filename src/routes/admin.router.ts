import { User } from "../models/user.model";

var express = require('express');
var router = express.Router();

const user = require('../controllers/user.controller')
const product = require('../controllers/product.controller')
const category = require('../controllers/category.controller')
const order = require('../controllers/order.controller')
const auth = require('../controllers/auth.controller')
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const access_token = req.headers.cookie
    if (access_token == undefined) return res.redirect('/admin/withoutauth')
    const token = req.headers.cookie.split('=')[1]
    if (token != undefined) {
        const { cpf } = jwt.verify(token, 'secretKey')
        User.findByPk(cpf, { raw: true })
            .then(result => {
                if (result?.type == 'admin') next()
            }
            )
            .catch(e => console.log(e))
        return res.redirect('/admin/withoutauth')
    }
}

router.get('/login', auth.adminLogin)

router.post('/login', auth.loginAdmin)

router.get('/menu', verifyToken, user.adminHome)

router.get('/product/', verifyToken, product.getAll)
router.get('/product/create', verifyToken, product.addProductPage)
router.get('/product/update/:id', verifyToken, product.updatePage)
router.get('/product/delete/:id', verifyToken, product.deletePage)

router.get('/category/', verifyToken, category.getAll)
router.get('/category/create', verifyToken, category.addCategoryPage)
router.get('/category/update/:id', verifyToken, category.updatePage)
router.get('/category/delete/:id', verifyToken, category.deletePage)

router.get('/order/', verifyToken, order.getAll)


router.get('/withoutauth', auth.withoutauth)

router.get('/mainhome', auth.mainhome)

router.get('/adminlogin', auth.adminLogin)

router.get('/signUpAdmin', auth.signUpAdmin)

router.get('/adminHome', auth.adminHome)


module.exports = router;