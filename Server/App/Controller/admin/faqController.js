const faqModel = require("../../Models/faqModel");

let faqController = {
    create : async (req,res)=>{
        console.log(req.body);
        let {faqQuestion,faqAnswer,faqOrder} = req.body
        let insertObj = {
            question : faqQuestion,
            answer : faqAnswer,
            order: faqOrder,
        }

        try{
            let checkSameFAQs = await faqModel.findOne({question : faqQuestion})
            if(checkSameFAQs){
                res.status(200).json(
                    {
                        status:0,
                        message:"FAQ error",
                        err:{
                            question: "FAQ question already exists..."
                        }
                    }
                )
            }
            else{

                    let faqRes = await faqModel.insertOne(insertObj)
                    let obj = {
                        status: true,
                        faqRes,
                        message: "faq created"
                    }
                res.status(200).json(obj);
            }
        }
        catch(error){
            let err={};
            for(let key in error.errors){
                err[key] = error.errors[key].message
            }
            res.send(
                {
                    status: 0,
                    message: "FAQ error",
                    err,
                }
            )

            
        }

        
    },

    view : async(req,res)=>{
        let data = await faqModel.find()
        let obj = {
            status: true,
            data,
            message: "faq viewed"
        }
        res.send(obj);
    },

    delete : async(req,res)=>{
        let {id} = req.params
        let deleteRes = await faqModel.deleteOne({_id:id})

        let obj = {
            status: true,
            message: "faq deleted",
            deleteRes
        }
        res.send(obj);
    },

    update : async(req,res)=>{
        let {id} = req.params
        let {faqQuestion,faqAnswer,faqOrder} = req.body
        let updateObj = {
            question : faqQuestion,
            answer : faqAnswer,
            order: faqOrder,
        }

        let updateRes = await faqModel.updateOne(
            {_id:id},
            {
                $set:updateObj
            }
        )
        let obj = {
            status: true,
            message: "faq updated",
            updateRes
        }
        res.send(obj);
    },

    multidelete: async(req,res)=>{
        let {ids} = req.body;
        let multideleteRes = await faqModel.deleteMany({_id:ids});

        let obj = {
            status: true,
            message: "FAQ's Deleted",
            multideleteRes
        }
        res.send(obj)
    },

    changeStatus: async (req,res)=>{
        let {ids} = req.body;
        for(let v of ids){
            let oldStatus = await faqModel.findOne({_id:v}).select("status")
            let {status} = oldStatus
            await faqModel.updateOne(
                {
                   _id:v 
                },
                {
                    $set:{
                        status: !status
                    },
                }
            )
        }
        let obj = {
            status: true,
            message:"FAQ's status updated"            
        }
        res.send(obj)
    }

}

module.exports = faqController