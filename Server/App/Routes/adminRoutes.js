let express = require("express")
const colorRoute = require("./admin/colorRoute")
const materialRoute = require("./admin/materialRoute")
const countryRoute = require("./admin/countryRoute")
const faqRoute = require("./admin/faqRoute")
const categoryRoute = require("./admin/categoryRoute")

let adminRoutes = express.Router()

adminRoutes.use("/color",colorRoute)
// http://localhost:8000/api/admin/color

adminRoutes.use("/material",materialRoute)
// http://localhost:8000/api/admin/material

adminRoutes.use("/country",countryRoute)
// http://localhost:8000/api/admin/country

adminRoutes.use("/faq",faqRoute)
// http://localhost:8000/api/admin/faq

adminRoutes.use("/category",categoryRoute)
// http://localhost:8000/api/admin/category

module.exports = adminRoutes