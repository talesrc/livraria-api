import express, { Request, Response } from 'express';

import { db } from './config/config';

const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const orderRouter = require('./routes/order.router');
const categoryRouter = require('./routes/category.router');
const adminRouter = require('./routes/admin.router');

var session = require('express-session')

const path = require('path');

const PORT = 3000

db.sync()

const app = express()

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter)
app.use('/category', categoryRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});
