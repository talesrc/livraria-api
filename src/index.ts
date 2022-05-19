import express from 'express';


import { db } from './config/config';

const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const orderRouter = require('./routes/order.router');
const categoryRouter = require('./routes/category.router');
const adminRouter = require('./routes/admin.router');


const path = require('path');

const PORT = 3000

db.sync()
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter)
app.use('/category', categoryRouter)
app.use('/', userRouter)
app.use('/', productRouter)
app.use('/order', orderRouter)

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
