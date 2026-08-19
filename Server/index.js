let express = require("express")
const cors = require('cors');
const adminRoutes = require("./App/Routes/adminRoutes")
const webRoutes = require("./App/Routes/webRoutes");
const dbConnection = require("./App/Config/dbConnection");
require("dotenv").config()
let App = express()

App.use(express.json())   
App.use(cors())
App.use("/api/admin",adminRoutes)
// http://localhost:8000/api/admin

App.use("/api/web",webRoutes)
// http://localhost:8000/api/web

App.use("/upload/Category",express.static("upload/Category"))
App.use("/upload/Slider",express.static("upload/Slider"))
App.use("/upload/Testimonial",express.static("upload/Testimonial"))

App.listen(process.env.PORT,async ()=>{
    await dbConnection();
})