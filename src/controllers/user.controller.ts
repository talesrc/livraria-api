import { Request, Response } from "express"
import { User } from "../models/user.model"


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

exports.createAdmin = (req: Request, res: Response) => {
    if (req.body.name.length > 0 && req.body.cpf.length > 0 && req.body.email.length > 0 && req.body.password.length > 0) {
        User.create<any>({
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
            password: req.body.password,
            type: 'admin'
        })
            .then(() => res.redirect('/admin/login'))
            .catch(e => {
                console.log(e)
                res.redirect('/admin/signup')
            })
    }
}

exports.createUser = (req: Request, res: Response) => {
    if (req.body.name.length > 0 && req.body.cpf.length > 0 && req.body.email.length > 0 && req.body.password.length > 0) {
        User.create<any>({
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
            password: req.body.password,
            type: 'user'
        })
            .then(() => res.redirect('/login'))
            .catch(e => {
                console.log(e)
                res.redirect('/signup')
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

exports.adminHome = (req: Request, res: Response) => {
    res.render('admin/management')
}

exports.home = (req: Request, res: Response) => {
    res.render('home')
}

exports.adminLogin = (req: Request, res: Response) => {
    res.render('admin/adminLogin')
}

exports.signInUser = (req: Request, res: Response) => {
    res.render('user/signInUser')
}

exports.signUpUser = (req: Request, res: Response) => {
    res.render('user/signUpUser')
}
