const materialModel = require("../../Models/materialModel");

let materialController = {
    create : async(req,res) =>{
        let {materialName,materialOrder} = req.body;
        let insertObj = {
            name: materialName,
            order: materialOrder,
        }

        try{
            let checkSameMaterial = await materialModel.findOne({name: materialName})
            if(checkSameMaterial){
                res.status(200).json(
                    {
                        status: 0,
                        message: "Material Error",
                        err:{
                            name: "Material Name already exists..."
                        }
                    }
                )
            }
            else{
                let materialRes = await materialModel.insertOne(insertObj);
                let obj = {
                    status: true,
                    message:  "material added",
                    materialRes
                }
                res.status(200).json(obj)

            }
        }
        catch(error){
            let err={}
            for(let key in error.errors){
                err[key] = error.errors[key].message
            }
            res.send(
                {
                    status:0,
                    message: "Material Error",
                    err
                }
            )
        }
    },

    view : async(req,res)=>{
        //filter 
        const orCondition = [];
        if(req.query.name){
            orCondition.push({name: new RegExp(req.query.name,"i")})
        }
        if(req.query.order){
            orCondition.push({order:req.query.order})
        }

        let filter={}
        
        if(orCondition.length>=1){
            filter.$or=orCondition
        }

        let data = await materialModel.find(filter)
        let obj = {
            status: true,
            data,
            message: "View material"
        }
        res.send(obj)
    },

    delete : async(req,res)=>{
        let {id} = req.params
        let deleteRes = await materialModel.deleteOne({_id:id})
        let obj = {
            status: true,
            message: "Delete material",
            deleteRes
        }
        res.send(obj)
    },

    update : async(req,res)=>{
        let {id} = req.params
        let {materialName,materialOrder} = req.body;
        let updateObj = {
            name: materialName,
            order: materialOrder,
        }
        console.log(updateObj);
        
        let updateRes = await materialModel.updateOne(
            {_id:id},
            {
                $set:updateObj
            }
        )
        let obj = {
            status: true,
            message: "Material Updated",
            updateRes
        }
        res.send(obj)
    },

    multidelete: async(req,res)=>{
        let {ids} = req.body    
        let multideleteRes = await materialModel.deleteMany({_id:ids})
        let obj = {
            status: true,
            message:"Material Deleted",
            multideleteRes
        }
        
        res.send(obj)
    },
    
    changeStatus: async(req,res)=>{
        let {ids} = req.body
        for(let v of ids){
            let oldStatus = await materialModel.findOne({_id:v}).select("status")
            let {status} = oldStatus;
            await materialModel.updateOne(
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
            message:"Material Status updated",
        }        
        res.send(obj)
    },

    details: async(req,res)=>{
        let {id} = req.params
        let data = await materialModel.findOne({_id: id})
        let obj = {
            status: true,
            data,
            message: "Material Details"
        }
        res.send(obj)
        
    }
}

module.exports = materialController