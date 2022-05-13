import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Category } from './category.model'
import { Product } from './product.model'

@Table
export class ProductCategory extends Model<ProductCategory> {

    @ForeignKey(() => Product)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    productId?: string

    @ForeignKey(() => Category)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    categoryId?: number

    //Relations
}
