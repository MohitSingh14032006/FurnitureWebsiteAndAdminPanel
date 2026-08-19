let express = require("express")
const countryController = require("../../Controller/admin/countryController")


let countryRoute = express.Router()

countryRoute.post("/create",
    countryController.create
)

countryRoute.get("/view",
    countryController.view
)

countryRoute.get("/details/:id",
    countryController.details
)

countryRoute.delete("/delete/:id",
    countryController.delete
)

countryRoute.put("/update/:id",
    countryController.update
)

countryRoute.post(
    "/multidelete",
    countryController.multidelete
)

countryRoute.post(
    "/changeStatus",
    countryController.changeStatus
)
module.exports = countryRoute