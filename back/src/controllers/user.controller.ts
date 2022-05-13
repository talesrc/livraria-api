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

exports.create = (req: Request, res: Response) => {
    User.create(req.body)
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.update = (req: Request, res: Response) => {
    User.update(req.body, {where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.delete = (req: Request, res: Response) => {
    User.destroy({where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}
