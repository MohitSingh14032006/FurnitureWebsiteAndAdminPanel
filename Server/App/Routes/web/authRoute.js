let express = require("express")
const authController = require("../../Controller/web/authController")
const multer = require("multer")
let userRoutes = express.Router()

let storage = multer.diskStorage(
    {
        destination: (req,file,cb)=>{
            cb(null,"upload/User")
        },
        filename: (req,file,cb) => {
            cb(null,Date.now()+file.originalname)
        }
    }
)

userRoutes.post(
    "/register", authController.register
)

userRoutes.post(
    "/login", authController.login
)

//After login
let uploads = multer.uploads({storage})
userRoutes.post(
    "/change-password", authController.changePassword
)

userRoutes.post(
    "/update-profile", upload.single('image'),authController.updateProfile
)

module.exports = userRoutes