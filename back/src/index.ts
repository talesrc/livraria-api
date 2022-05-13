import express, { Request, Response } from 'express';

import { db } from './config/config';

const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const orderRouter = require('./routes/order.router');
const categoryRouter = require('./routes/category.router');

const PORT = 3000

db.sync()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
app.use('/category', categoryRouter)

app.get('/', (req: Request, res: Response) => res.send('Olá, mundo'))

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});
