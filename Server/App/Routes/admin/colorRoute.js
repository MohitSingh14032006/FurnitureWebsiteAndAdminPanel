let express = require("express")
const colorController = require("../../Controller/admin/colorController")

let colorRoute = express.Router()

// http://localhost:8000/api/admin/color/create
colorRoute.post(
    "/create",
    colorController.create
)

// http://localhost:8000/api/admin/color/view
colorRoute.get(
    "/view",
    colorController.view
)

// http://localhost:8000/api/admin/color/details
colorRoute.get(
    "/details/:id",
    colorController.details
)

// http://localhost:8000/api/admin/color/delete
colorRoute.delete(
    "/delete/:id",
    colorController.delete
)

// http://localhost:8000/api/admin/color/update
colorRoute.put(
    "/update/:id",
    colorController.update
)

// http://localhost:8000/api/admin/color/multidelete
colorRoute.post(
    "/multidelete",
    colorController.multidelete
)

// http://localhost:8000/api/admin/color/changeStatus
colorRoute.post(
    "/changeStatus",
    colorController.changeStatus
)
module.exports = colorRoute