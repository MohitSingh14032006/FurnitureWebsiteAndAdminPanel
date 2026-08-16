let express = require("express")
let testimonialController = require("../../Controller/admin/testimonialController")
let testimonialRoute = express.Router();
let multer = require("multer")

let storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,"upload/Testimonial")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)
const upload = multer({ storage })

testimonialRoute.post(
    "/create",upload.single('image'),testimonialController.create
)
testimonialRoute.get(
    "/view",testimonialController.view
)

module.exports = testimonialRoute