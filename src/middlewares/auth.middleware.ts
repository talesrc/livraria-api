const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
    const access_token = req.headers.cookie
    if (access_token == undefined) return res.redirect('/withoutAuth')
    const token = req.headers.cookie.split('=')[1]
    if (token != undefined) {
        jwt.verify(token, 'secretKey', function (err, decoded) {
            if (err) {
                return res.redirect('/withoutAuth')
            }
            next()
        })
    } else {
        return res.redirect('/withoutAuth')
    }
}

module.exports = {
    validateToken
}
