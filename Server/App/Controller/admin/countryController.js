const countryModel = require("../../Models/countryModel");

let countryController ={
    create : async (req,res)=>{

        console.log(req.body);
        let {countryName,countryOrder} = req.body;
        let insertObj = {
            name: countryName,
            order: countryOrder,
        }

        try{
            let checkSameCountry = await countryModel.findOne({name:countryName})

            if(checkSameCountry){
                res.status(200).json(
                    {
                        status:0,
                        message: "Country Error",
                        err:{
                           name:"Country name already exists..." 
                        }
                    }
                )
            }
            else{
                let countryRes = await countryModel.insertOne(insertObj)
                console.log(insertObj);
                
                let obj = {
                status: true,
                message:  "country added",
                countryRes
                }
                res.status(200).json(obj);
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
                    message: "Country Error",
                    err,
                }
            )
        }        
    },

    view : async (req,res)=>{
        let orCondition = [];
        
        if(req.query.name){
            orCondition.push({name: new RegExp(req.query.name,"i")})
        }
        if(req.query.order){
            orCondition.push({order: req.query.order})
        }

        let filter = {}
        if(orCondition.length>=1){
            filter.$or=orCondition;
        }

        let data = await countryModel.find(filter)
        let obj = {
            status: true,
            data,
            message: "View country"
        }
        res.send(obj);
    },

    delete : async(req,res)=>{
        let {id} = req.params
        let deleteRes = await countryModel.deleteOne({_id:id})
        let obj = {
            status: true,
            message: "Country Deleted",
            deleteRes
        }

        res.send(obj);
    },

    update : async(req,res)=>{
        let {id} = req.params
        let {countryName,countryOrder} = req.body;
        let updateObj = {
            name: countryName,
            order: countryOrder,
        }

        let updateRes = await countryModel.updateOne(
            {_id:id},
            {
                $set:updateObj
            }
        )
        let obj = {
            status: true,
            message: "Country Updated",
            updateRes
        }

        res.send(obj);
    },

    multidelete: async(req,res)=>{
            let {ids} = req.body
            // console.log(ids);
    
            let multideleteRes = await countryModel.deleteMany({_id:ids})
            let obj = {
                status: true,
                message:"Country Deleted",
                multideleteRes
            }
            
            res.send(obj)
    },

    changeStatus: async(req,res)=>{
            let {ids} = req.body
            for(let v of ids){
                let oldStatus = await countryModel.findOne({_id:v}).select("status")
                let {status} = oldStatus;
                await countryModel.updateOne(
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
                message:"Country Status updated",
            }        
            res.send(obj)
    },

    details: async(req,res)=>{
        let {id} = req.params;
        let data = await countryModel.findOne({_id: id});
        let obj = {
            status: true,
            data,
            message: "Country Details"
        }
        res.send(obj);
    }
}

module.exports = countryController