import { Request, Response } from "express";
import { User } from "../models/user.model";

const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (req.body.email.length > 0 && req.body.password.length > 0) {
        const user: any = await User.findOne({ raw: true, where: { email: email, password: password } })
            .then(result => {
                if (result?.cpf !== undefined) {
                    return {
                        cpf: result?.cpf,
                        createdAt: result?.createdAt
                    }
                }
            })
            .catch(e => {
                console.log(e)
                res.redirect('/admin/login')
            })

        if (user) {
            const token = jwt.sign(user, 'secretKey')
            res.cookie('access_token', token).redirect('/admin/menu/',)
        } else {
            res.redirect('/admin/login/')
        }
    }
}

exports.adminLogin = (req: Request, res: Response) => {
    res.render('admin/adminLogin')
}

exports.withoutauth = (req: Request, res: Response) => {
    res.render('withoutAuth')
}

exports.signup = (req: Request, res: Response) => {
    res.render('signup')
}

exports.mainhome = (req: Request, res: Response) => {
    res.render('mainhome')
}