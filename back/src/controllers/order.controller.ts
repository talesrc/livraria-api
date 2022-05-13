import { Request, Response } from "express"
import { Order } from "../models/order.model"

exports.getAll = (req: Request, res: Response) => {
    Order.findAll()
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.create = (req: Request, res: Response) => {
    Order.create(req.body)
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getByUserId = (req: Request, res: Response) => {
    Order.findAll({where: {userId: req.params.id}})
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getById = (req: Request, res: Response) => {
    Order.findAll({where: {id: req.params.id}})
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.update = (req: Request, res: Response) => {
    Order.update(req.body, {where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.delete = (req: Request, res: Response) => {
    Order.destroy({where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}
