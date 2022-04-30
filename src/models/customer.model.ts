import { Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Adress } from './adress.model'

@Table
export class Customer extends Model<Customer> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    cpf: string

    @HasMany(() => Adress, 'id')
    adresses: Adress[]
}
