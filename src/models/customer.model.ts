import { Column, DataType, Model, Table } from 'sequelize-typescript'

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

}
