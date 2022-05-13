import { Request, Response } from "express"
import { Adress } from "../models/adress.model"

exports.getAll = (req: Request, res: Response) => {
    Adress.findAll()
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.create = (req: Request, res: Response) => {
    Adress.create(req.body)
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getByUserId = (req: Request, res: Response) => {
    Adress.findAll({where: {userId: req.params.id}})
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getById = (req: Request, res: Response) => {
    Adress.findAll({where: {id: req.params.id}})
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.update = (req: Request, res: Response) => {
    Adress.update(req.body, {where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.delete = (req: Request, res: Response) => {
    Adress.destroy({where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}
