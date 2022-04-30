import { Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({ timestamps: false })
export class Seller extends Model<Seller> {
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
