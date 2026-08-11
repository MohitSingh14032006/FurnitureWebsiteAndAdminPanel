const colorModel = require("../../Models/colorModel");

let colorController = {
    create : async(req,res) =>{
        console.log(req.body);
        
        let {colorName,colorCode,colorOrder} = req.body
        let insertObj = {
            name : colorName,
            code : colorCode,
            order: colorOrder
        }
        try{
            let checkSameColor = await colorModel.findOne({name:colorName})

            if(checkSameColor){
                res.status(200).json(
                    {
                        status:0,
                        message: "Color Error",
                        err:{
                            name: "Color Name Already exists ..."
                        },
                    }
                )
                // res.send(
                // {
                //     status:0,
                //     message: "Color Error",
                //     err:{
                //         name: "Color Name Already exists ..."
                //     },
                // }
                // )
            }
            else{
                let colorRes = await colorModel.insertOne(insertObj)
                // console.log(insertObj);
                
                 let obj = {
                    status: true,
                    message: "Color added",
                    colorRes
                }
                // res.send(obj)
                res.status(200).json(obj)

            }

        }
        catch(error){

            // ye error -> object return karta h, jisme "errors" naam ki key hoti h
            // console.log(error.errors);  object -> inside object
            
            let err = {}
            for(let key in error.errors){
                err[key] = error.errors[key].message
                // console.log(key, error.errors[key].message);
                // let err = {
                //     "name" : "Please fill the name",
                //     "code" : "please fill the code"
                // }                
            }
            res.send(
                {
                    status:0,
                    message: "Color Error",
                    err,
                }
            );
            
        }
    },

    view : async (req,res)=>{
        // let {id} = req.query;
        // console.log(req.query);

        const orCondition = [];
        if(req.query.name){
            orCondition.push({name: new RegExp(req.query.name,"i")})
        }
        if(req.query.code){
            orCondition.push({code:req.query.code})
        }
        if(req.query.order){
            orCondition.push({order:req.query.order})
        }
        // [{name:"Red"},{code:"#ccc"},{order:3}]

        let filter={}        
        if(orCondition.length>=1){
            filter.$or=orCondition
        }
        // {$or:[{name:"Red"},{code:"#ccc"}]

        let data = await colorModel.find(filter)
        let obj = {
            status: true,
            data,
            message: "View Color"
        }
        res.send(obj)
    },

    delete :async (req,res)=>{
        let {id} = req.params
        let delRes = await colorModel.deleteOne({_id:id})
        let obj = {
            status: true,
            message: "Delete Color",
            delRes
        }
        res.send(obj)
    },

    update :async (req,res)=>{
        let {id} = req.params
        let {colorName,colorCode,colorOrder} = req.body
        let updateObj = {
            name : colorName,
            code : colorCode,
            order: colorOrder
        }
        console.log(updateObj);
        
        let updateRes = await colorModel.updateOne(
            {_id:id},
            {
                $set:updateObj
            }
        )
        
        let obj = {
            status: true,
            message: "Color Updated",
            updateRes
        }
        res.send(obj)
    },

    multidelete: async(req,res)=>{
        let {ids} = req.body
        // console.log(ids);

        let multideleteRes = await colorModel.deleteMany({_id:ids})
        let obj = {
            status: true,
            message:"Color Deleted",
            multideleteRes
        }
        
        res.send(obj)
    },

    changeStatus: async(req,res)=>{
        let {ids} = req.body
        for(let v of ids){
            let oldStatus = await colorModel.findOne({_id:v}).select("status")
            let {status} = oldStatus;
            await colorModel.updateOne(
                {
                    _id:v
                },
                {
                    $set:{
                        status:!status
                    },
                }
            )
        }
        let obj = {
            status: true,
            message:"Color Status updated",
        }        
        res.send(obj)
    },

    details: async(req,res)=>{
        let {id} = req.params;
        let data = await colorModel.findOne({_id: id});
        let obj = {
            status: true,
            data,
            message: "Color Details"
        }
        res.send(obj);
    }
}

module.exports = colorController