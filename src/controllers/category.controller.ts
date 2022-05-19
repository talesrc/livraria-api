import { Resolver } from "dns"
import { Request, Response } from "express"
import { Category } from "../models/category.model"

exports.getAllCategoriesPage = async(req: Request, res: Response) => {
    await Category.findAll({ raw: true })
        .then(result => {
            res.render('admin/category/category', {
                categories: result
            })
        })
        .catch(e => {
            console.log(e)
            res.render('home')
        })
}

exports.createCategoryPage = (req: Request, res: Response) => {
    res.render('admin/category/createCategory')
}

exports.updateCategoryPage = async (req: Request, res: Response) => {
    await Category.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('admin/category/updateCategory', {
                category: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}

exports.deleteCategoryPage = async (req: Request, res: Response) => {
    await Category.findByPk(req.params.id, { raw: true })
        .then(result => {
            res.render('admin/category/deleteCategory', {
                category: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}

exports.create = async (req: Request, res: Response) => {
    await Category.create(req.body)
        .then(() => res.redirect('/admin/category'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category')
        })
}

exports.update = async (req: Request, res: Response) => {
    await Category.update(req.body, { where: { id: req.body.id } })
        .then(() => {
            res.redirect('/admin/category/')
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}

exports.delete = async (req: Request, res: Response) => {
    await Category.destroy({ where: { id: req.body.id } })
        .then(() => res.redirect('/admin/category/'))
        .catch(e => {
            console.log(e)
            res.redirect('/admin/category/')
        })
}
