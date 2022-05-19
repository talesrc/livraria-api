import { Request, Response } from "express"
import { Order } from "../models/order.model"

exports.getAllOrdersPage = async (req: Request, res: Response) => {
    await Order.findAll({ raw: true })
        .then(result => {
            res.render('inConstruction', {
                orders: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/menu')
        })
}

exports.create = async (req: Request, res: Response) => {
    await Order.create(req.body)
        .then(() => res.sendStatus(201))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.getByUserId = async (req: Request, res: Response) => {
    await Order.findAll({ where: { userId: req.params.id } })
        .then(result => res.json(result))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.getById = async (req: Request, res: Response) => {
    await Order.findAll({ where: { id: req.params.id } })
        .then(result => res.json(result))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.update = async (req: Request, res: Response) => {
    await Order.update(req.body, { where: { id: req.body.id } })
        .then(() => res.sendStatus(201))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}

exports.delete = async (req: Request, res: Response) => {
    await Order.destroy({ where: { id: req.body.id } })
        .then(() => res.sendStatus(201))
        .catch(e => {
            console.log(e)
            res.sendStatus(400)
        })
}
