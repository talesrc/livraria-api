import { Sequelize } from "sequelize-typescript";
import { Adress } from "../models/adress.model";
import { Customer } from "../models/customer.model";
import { Seller } from "../models/seller.model";

export const db = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'tales',
    database: 'livraria',
    models: [Customer, Adress, Seller],
    define: {
        timestamps: false
    }
});
