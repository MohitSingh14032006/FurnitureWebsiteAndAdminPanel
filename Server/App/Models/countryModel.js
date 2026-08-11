let mongoose = require("mongoose")

let countrySchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, "Please fill the country name"],
            minLength: [3, "Country Name should be atleast 3 length"],
            maxLength: [100, "Country Name must be atmost 100 length"]
        },
        order : {
            type: Number,
            required: [true,"Please fill the country order"],
            minLength: [1, "Order should be atleast 1 length"],
            maxLength: [100, "Order must be atmost 100 length"]
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

let countryModel = mongoose.model("country",countrySchema)
module.exports = countryModel