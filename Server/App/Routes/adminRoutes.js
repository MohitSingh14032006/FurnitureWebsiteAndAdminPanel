let express = require("express")
const colorRoute = require("./admin/colorRoute")
const materialRoute = require("./admin/materialRoute")
const countryRoute = require("./admin/countryRoute")
const faqRoute = require("./admin/faqRoute")
const categoryRoute = require("./admin/categoryRoute")
const sliderRoute = require("./admin/sliderRoute")
const testimonialRoute = require("./admin/testimonialRoute")

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

adminRoutes.use('/slider',sliderRoute)
//http://localhost:8000/api/admin/slider

adminRoutes.use('/testimonial',testimonialRoute)
//http://localhost:8000/api/admin/testimonial

module.exports = adminRoutes