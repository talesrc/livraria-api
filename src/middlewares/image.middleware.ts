const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        req.body.image = path.join(__dirname, `../public/images/${Date.now() + path.extname(file.originalname)}`)
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

module.exports = {
    upload
}
