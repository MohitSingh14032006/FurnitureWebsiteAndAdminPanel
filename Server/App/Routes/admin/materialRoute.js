let express = require("express")
const materialController = require("../../Controller/admin/materialController")

let materialRoute = express.Router()

// http://localhost:8000/api/admin/material/create
materialRoute.post(
    "/create",
    materialController.create
)

// http://localhost:8000/api/admin/material/view
materialRoute.get(
    "/view",
    materialController.view
)

materialRoute.get(
    "/details/:id",
    materialController.details
)

// http://localhost:8000/api/admin/material/delete/:id
materialRoute.delete(
    "/delete/:id",
    materialController.delete
)

// http://localhost:8000/api/admin/material/update/:id
materialRoute.put(
    "/update/:id",
    materialController.update
)

//http://localhost:8000/api/admin/material/multidelete
materialRoute.post(
    "/multidelete",
    materialController.multidelete
)

// http://localhost:8000/api/admin/material/changeStatus
materialRoute.post(
    "/changeStatus",
    materialController.changeStatus
)

module.exports = materialRoute