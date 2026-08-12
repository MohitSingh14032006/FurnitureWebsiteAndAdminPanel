let mongoose = require("mongoose")
let categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"Please fill the Category name"],
            minLength: [3,"Category name must be atleast 3 length"],
            maxLength: [100,"Category name must be atmost 100 length"]
        },
        image: String,  //Image Name -> string
        order:{
            type: Number,
            required:[true,"Please fill Category order"]
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
let categoryModel = mongoose.model("category",categorySchema)
module.exports = categoryModel