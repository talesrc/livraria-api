import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table
export class Product extends Model<Product> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    price: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    picturePath: string
}
