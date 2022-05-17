import { Request, Response } from "express"
import { Product } from "../models/product.model"
import { ProductCategory } from "../models/productCategory.model"

exports.getAll = (req: Request, res: Response) => {
    Product.findAll({ raw: true })
        .then(result => {
            res.render('product', {
                products: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/')
        })

}

exports.updatePage = (req: Request, res: Response) => {
    Product.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('updateProduct', {
                product: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/')
        })
}

exports.deletePage = (req: Request, res: Response) => {
    Product.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('deleteProduct', {
                product: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product/')
        })
}

exports.getByCategory = async (req: Request, res: Response) => {
    const productIds = await ProductCategory.findAll({
        attributes: ['productId'],
        where: { categoryId: req.params.id }
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
        .then(() => res.redirect('/admin/product/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/')
        })
}

exports.addProductPage = (req: Request, res: Response) => {
    res.render('createProduct')
}

exports.update = (req: Request, res: Response) => {
    Product.update(req.body, { where: { id: req.body.id } })
        .then(() => res.redirect('/admin/product/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product/')
        })
}

exports.delete = (req: Request, res: Response) => {
    Product.destroy({ where: { id: req.body.id } })
        .then(() => res.redirect('/admin/product/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product/')
        })
}
