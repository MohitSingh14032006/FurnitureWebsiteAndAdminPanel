let express = require("express")
const faqController = require("../../Controller/admin/faqController")

let faqRoute = express.Router()

faqRoute.post("/create",
    faqController.create
)

faqRoute.get("/view",
    faqController.view
)

faqRoute.delete("/delete/:id",
    faqController.delete
)

faqRoute.put("/update/:id",
    faqController.update
)

faqRoute.post(
    "/multidelete",
    faqController.multidelete
)

faqRoute.post(
    "/changeStatus",
    faqController.changeStatus
)

module.exports = faqRoute