let mongoose = require("mongoose")
let sliderSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please fill the slider name"],
            minLength: [3,"Slider name must be atleast 3 length"],
            maxLength: [100,"Slider name must be atmost 100 length"]
        },
        image: String,  //Image Name -> string
        order:{
            type: Number,
            required:[true,"Please fill slider order"]
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
let sliderModel = mongoose.model("slider",sliderSchema)
module.exports = sliderModel