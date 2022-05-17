import { Request, Response } from "express"
import { User } from "../models/user.model"
const jwt = require("jsonwebtoken");

exports.getAll = (req: Request, res: Response) => {
    User.findAll()
        .then(result => res.json(result))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.getByCPF = (req: Request, res: Response) => {
    User.findByPk(req.params.cpf)
        .then(result => res.json(result))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.create = (req: Request, res: Response) => {
    if (req.body.name.length > 0 && req.body.cpf.length > 0 && req.body.email.length > 0 && req.body.password.length > 0) {
        User.create<any>({
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
            password: req.body.password,
            type: req.body.name == 'admin' ? 'admin' : 'user'
        })
            .then(() => res.redirect('http://localhost:3000/user/login'))
            .catch(e => {
                console.log(e)
                res.redirect('http://localhost:3000/register')
            })
    }
}

exports.update = (req: Request, res: Response) => {
    User.update(req.body, { where: { id: req.body.id } })
        .then(() => res.sendStatus(201))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.delete = (req: Request, res: Response) => {
    User.destroy({ where: { id: req.body.id } })
        .then(() => res.sendStatus(201))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (req.body.email.length > 0 && req.body.password.length > 0) {
        const user: any = await User.findOne({ raw: true, where: { email: email, password: password } })
            .then(result => result?.type)
            .catch(e => console.log(e))
        
        if (user) {
            jwt.sign()
        }
    }
}

exports.adminHome = (req: Request, res: Response) => {
    res.render('adminHome')
}

exports.adminLogin = (req: Request, res: Response) => {
    res.render('adminLogin')
}
