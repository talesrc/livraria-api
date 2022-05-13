import { Request, Response } from "express"
import { Category } from "../models/category.model"

exports.getAll = (req: Request, res: Response) => {
    Category.findAll()
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.create = (req: Request, res: Response) => {
    Category.create(req.body)
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getById = (req: Request, res: Response) => {
    Category.findAll({where: {id: req.params.id}})
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.update = (req: Request, res: Response) => {
    Category.update(req.body, {where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.delete = (req: Request, res: Response) => {
    Category.destroy({where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}
