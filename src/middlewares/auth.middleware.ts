import { User } from "../models/user.model";

const jwt = require("jsonwebtoken");

const verifyAdminToken = async (req, res, next) => {
    console.log(req.headers.cookie)
    const access_token = req.headers.cookie
    if (access_token == undefined) return res.redirect('/admin/withoutAuth')
    const token = req.headers.cookie.split('=')[1]
    if (token != undefined) {
        jwt.verify(token, 'secretKey', function (err, decoded) {
            if (err) {
                return res.redirect('/admin/withoutAuth')
            }
            next()
        })
    } else {
        return res.redirect('/admin/withoutAuth')
    }
}

const verifyUserToken = async (req, res, next) => {
    console.log(req.headers.cookie)
    const access_token = req.headers.cookie
    if (access_token == undefined) return res.redirect('/withoutAuth')
    const token = req.headers.cookie.split('=')[1]
    if (token != undefined) {
        jwt.verify(token, 'secretKey', function (err, decoded) {
            if (err) {
                return res.redirect('/withoutAuth')
            }
            next()
        })
    } else {
        return res.redirect('/withoutAuth')
    }
}


module.exports = {
    verifyAdminToken
}