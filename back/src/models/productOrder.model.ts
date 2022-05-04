import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Order } from './order.model'
import { Product } from './product.model'

@Table
export class ProductOrder extends Model<ProductOrder> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    })
    orderId: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    })
    productId: number
}
