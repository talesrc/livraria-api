import { Request, Response } from "express"
import { Product } from "../models/product.model"
import { ProductCategory } from "../models/productCategory.model"

exports.createProductPage = (req: Request, res: Response) => {
    res.render('admin/product/createProduct')
}

exports.adminGetAllProductsPage = async (req: Request, res: Response) => {
    await Product.findAll({ raw: true })
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

exports.userGetAllProductsPage = async (req: Request, res: Response) => {
    await Product.findAll({ raw: true })
        .then(result => {
            res.render('mainHome', {
                products: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product')
        })
}

exports.updateProductPage = async (req: Request, res: Response) => {
    await Product.findByPk(req.params.id, { raw: true })
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

exports.productPage = async (req: Request, res: Response) => {
    await Product.findByPk(req.params.id, { raw: true })
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

exports.deleteProductPage = async (req: Request, res: Response) => {
    await Product.findByPk(req.params.id, { raw: true })
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

exports.create = async (req: Request, res: Response) => {
    await Product.create(req.body)
        .then(() => res.redirect('/admin/product/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/')
        })
}



exports.update = async (req: Request, res: Response) => {
    await Product.update(req.body, { where: { id: req.body.id } })
        .then(() => res.redirect('/admin/product/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product/')
        })
}

exports.delete = async (req: Request, res: Response) => {
    await Product.destroy({ where: { id: req.body.id } })
        .then(() => res.redirect('/admin/product/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product/')
        })
}
