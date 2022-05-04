import { Column, CreatedAt, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Customer } from './customer.model'
import { Product } from './product.model'

@Table({timestamps: true})
export class Order extends Model<Order> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id'
        }
    })
    customerId: number

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price: number
}
