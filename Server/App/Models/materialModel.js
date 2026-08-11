let mongoose = require("mongoose")
let materialSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please fill the material name"],
            minLength: [3,"Material name must be atleast 3 length"],
            maxLength: [100,"Material name must be atmost 100 length"]
        },
        order:{
            type: Number,
            required:[true,"Please fill Material order"]
        },
        status:{
            type:Boolean,
            default:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)
let materialModel = mongoose.model("material",materialSchema)
module.exports = materialModel