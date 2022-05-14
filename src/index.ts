import express, { Application, Request, Response } from 'express';
import { db } from './config/config';

const PORT = 3000

db.sync()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Olá, mundo'))

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});