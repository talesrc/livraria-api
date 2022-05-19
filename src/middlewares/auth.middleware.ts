import { User } from "../models/user.model";

const jwt = require("jsonwebtoken");

const verifyAdminToken = async (req, res, next) => {
    const access_token = req.headers.cookie
    if (access_token == undefined) return res.redirect('/admin/withoutAuth')
    const token = req.headers.cookie.split('=')[1]
    if (token != undefined) {
        const { cpf } = jwt.verify(token, 'secretKey')
        await User.findByPk(cpf, { raw: true })
            .then(result => {
                if (result?.type == 'admin') next()
            })
            .catch(e => console.log(e))
    } else {
        return res.redirect('/admin/withoutAuth')
    }
}

const verifyUserToken = async (req, res, next) => {
    const access_token = req.headers.cookie
    if (access_token == undefined) return res.redirect('/admin/withoutAuth')
    const token = req.headers.cookie.split('=')[1]
    if (token != undefined) {
        const { cpf } = jwt.verify(token, 'secretKey')
        await User.findByPk(cpf, { raw: true })
            .then(result => {
                if (result?.type == 'user') next()
                else return res.redirect('/withoutAuth')
            })
            .catch(e => console.log(e))
    } else {
        return res.redirect('/admin/withoutAuth')
    }
}

module.exports = {
    verifyAdminToken
}