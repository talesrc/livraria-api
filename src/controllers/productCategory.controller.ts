import { Request, Response } from "express"
import { ProductCategory } from "../models/productCategory.model"
import { Category } from "../models/category.model"
import { Product } from "../models/product.model"

exports.adminGetAllProductsPage = async (req: Request, res: Response) => {
    const product = await Product.findAll({ raw: true, where: { id: req.params.id } })
    await Category.findAll({ raw: true })
        .then(result => {
            res.render('admin/product/productCategory', {
                product: product,
                categories: result
            })
        })
        .catch(e => {
            console.log(e)
            res.redirect('/admin/product')
        })
}

