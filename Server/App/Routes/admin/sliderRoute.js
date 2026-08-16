let express = require("express")
let sliderController = require("../../Controller/admin/sliderController")
let sliderRoute = express.Router()
let multer = require("multer")

let storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,"upload/Slider")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)
const upload = multer({ storage })


sliderRoute.post(
    "/create",upload.single('image'),sliderController.create
)
sliderRoute.get(
    "/view",sliderController.view
)

// http://localhost:8000/api/admin/category/view
// categoryRoute.get(
//     "/view",
// )


module.exports = sliderRoute