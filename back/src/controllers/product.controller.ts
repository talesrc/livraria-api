import { Request, Response } from "express"
import { Product } from "../models/product.model"
import { ProductCategory } from "../models/productCategory.model"

exports.getAll = (req: Request, res: Response) => {
    Product.findAll()
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getById = (req: Request, res: Response) => {
    Product.findByPk(req.params.id)
    .then(result => res.json(result))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.getByCategory = async (req: Request, res: Response) => {
    const productIds = await ProductCategory.findAll({
        attributes: ['productId'],
        where: {categoryId: req.params.id}
    })
    const products: any = []
    for (let id of productIds) {
        let product = Product.findByPk(parseInt(id.toString()))
        products.push(product)
    }
    res.json(products)
}

exports.create = (req: Request, res: Response) => {
    Product.create(req.body)
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.update = (req: Request, res: Response) => {
    Product.update(req.body, {where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}

exports.delete = (req: Request, res: Response) => {
    Product.destroy({where: {id: req.body.id}})
    .then(()=> res.sendStatus(201))
    .catch(e => {
        console.log(e)
        res.sendStatus(400)
    })
}
