import { Sequelize } from "sequelize-typescript";
import { Adress } from "../models/adress.model";
import { Customer } from "../models/customer.model";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";
import { ProductOrder } from "../models/productOrder.model";

export const db = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'tales',
    database: 'livraria',
    models: [Customer, Adress, Product, Order, ProductOrder],
    define: {
        timestamps: false
    }
});
