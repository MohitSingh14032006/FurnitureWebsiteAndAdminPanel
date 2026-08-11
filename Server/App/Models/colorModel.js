let mongoose = require("mongoose")
let colorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please fill the color name"],
            minLength: [3,"Color name must be atleast 3 length"],
            maxLength: [100,"Color name must be atmost 100 length"]
        },
        code:{
            type: String,
            required: [true,"Please fill the color code"],
            minLength: [2,"Color code must be atleast 2 length"],
            maxLength: [100,"Color code must be atmost 100 length"]
        },
        order:{
            type: Number,
            required:[true,"Please fill color order"]
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
let colorModel = mongoose.model("color",colorSchema)
module.exports = colorModel