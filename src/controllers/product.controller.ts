import { Request, Response } from "express"
import { Product } from "../models/product.model"
import { ProductCategory } from "../models/productCategory.model"

exports.getAll = (req: Request, res: Response) => {
    Product.findAll({ raw: true })
        .then(result => {
            res.render('admin/product/product', {
                products: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product')
        })
}

exports.getAllProductUsers = (req: Request, res: Response) => {
    Product.findAll({ raw: true })
        .then(result => {
            res.render('mainhome', {
                products: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product')
        })
}

exports.updatePage = (req: Request, res: Response) => {
    Product.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('admin/product/updateProduct', {
                product: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product')
        })
}

exports.productPage = (req: Request, res: Response) => {
    Product.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('user/product', {
                product: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/mainhome')
        })
}

exports.deletePage = (req: Request, res: Response) => {
    Product.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('admin/product/deleteProduct', {
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
    res.render('admin/product/createProduct')
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
