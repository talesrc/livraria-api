import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Category } from './category.model'
import { Product } from './product.model'

@Table
export class ProductCategory extends Model<ProductCategory> {

    @PrimaryKey
    @ForeignKey(() => Product)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: false
    })
    productId?: string

    @PrimaryKey
    @ForeignKey(() => Category)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: false
    })
    categoryId?: number
}
