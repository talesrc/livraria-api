import { Resolver } from "dns"
import { Request, Response } from "express"
import { Category } from "../models/category.model"

exports.getAll = (req: Request, res: Response) => {
    Category.findAll({ raw: true })
        .then(result => {
            res.render('category', {
                categories: result
            })
        })
        .catch(e => {
            console.log(e)
            res.render('home')
        })
}

exports.create = (req: Request, res: Response) => {
    Category.create(req.body)
        .then(() => res.redirect('/admin/category'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category')
        })
}

exports.addCategoryPage = (req: Request, res: Response) => {
    res.render('createCategory')
}

exports.updatePage = (req: Request, res: Response) => {
    Category.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('updateCategory', {
                category: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}

exports.deletePage = (req: Request, res: Response) => {
    Category.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('deleteCategory', {
                category: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}

exports.update = (req: Request, res: Response) => {
    Category.update(req.body, { where: { id: req.body.id } })
        .then(() => {
            res.redirect('/admin/category/')
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}

exports.delete = (req: Request, res: Response) => {
    Category.destroy({ where: { id: req.body.id } })
        .then(() => res.redirect('/admin/category/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}
