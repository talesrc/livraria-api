import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript'
import { Customer } from './customer.model'

@Table
export class Adress extends Model<Adress> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    street: string //rua

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    district: string //bairro

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    number: string

    //@BelongsTo(() => Customer, 'id')
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id'
        }
    })
    customerId: number
}
