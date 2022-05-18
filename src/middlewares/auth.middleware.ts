import { NextFunction, Request, Response, Router } from "express";
const jwt = require('jsonwebtoken');

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['access_token']
    console.log(token)
    if (token == null) return res.redirect('/admin/withoutauth/')
    jwt.verify(token, 'secretKey', (err, token) => {
        if (err) return res.redirect('/admin/withoutAuth/')
        next()
    })
}
