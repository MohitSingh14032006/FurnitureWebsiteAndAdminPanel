let express = require("express")
const categoryController = require("../../Controller/admin/categoryController")
let categoryRoute = express.Router()
let multer = require("multer")

let storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,"upload/Category")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)
const upload = multer({ storage })
// http://localhost:8000/api/admin/category/create
categoryRoute.post(
    "/create",upload.single('image'),categoryController.create
)
categoryRoute.get(
    "/view",categoryController.view
)

// http://localhost:8000/api/admin/category/view
// categoryRoute.get(
//     "/view",
// )


module.exports = categoryRoute