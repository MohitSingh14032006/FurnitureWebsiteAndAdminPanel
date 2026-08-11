let mongoose = require("mongoose")

let faqSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required:[true, "Please fill the question"],
            maxLength:[1000, "Question length should not exceeed 1000 length"],
            minLength:[3,"Question should be atleast of 3 length"]
        },
        answer:{
            type: String,
            required:[true, "Please fill the answer"],
            maxLength:[1000, "Answer length should not exceeed 1000 length"],
            minLength:[3,"Answer should be atleast of 3 length"]
        },
        order:{
            type: Number,
            required:[true,"Please fill the faq order"],
            minLength:[1, "Order should be of atleast 1 length"],
            maxLength:[500,"Order should be of atmost 500 length"]
        },
        status:{
            type: Boolean,
            default: true
        },
        date:{
            type: Date,
            default: Date.now
        }        
    }
)
let faqModel = mongoose.model("faq",faqSchema)
module.exports = faqModel
