let mongoose = require("mongoose")
let testimonialSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please fill the Testimonal name"],
            minLength: [3,"Testimonial name must be atleast 3 length"],
            maxLength: [100,"Testimonial name must be atmost 100 length"]
        },
        designation: {
            type: String,
            trim: true
        },
        rating: {
            type: Number,
            min: [1, "Rating must be at least 1"],
            max: [5, "Rating must be at most 5"]
        },
        message: {
            type: String,
            trim: true
        },
        image: String,  //Image Name -> string
        order:{
            type: Number,
            required:[true,"Please fill Testimonial order"]
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
let testimonialModel = mongoose.model("testimonial",testimonialSchema)
module.exports = testimonialModel