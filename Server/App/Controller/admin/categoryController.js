const categoryModel = require("../../Models/categoryModel");

let categoryController = {
    create : async(req,res) =>{
            let {name,order} = req.body;
            let insertObj = {
                name,
                order,
            }
            
            if(req.file){
                if(req.file.filename){
                    insertObj['image'] = req.file.filename;
                }
            }

            try{
                let checkSameCategory = await categoryModel.findOne({name})

                if(checkSameCategory){
                    res.status(200).json(
                        {
                            status:0,
                            message: "Category Error",
                            err:{
                                name: "Category Name Already exists ..."
                            },
                        }
                    )
                }
                else{
                    let CategoryRes = await categoryModel.insertOne(insertObj)

                     let obj = {
                        status: true,
                        message: "Category added",
                        CategoryRes
                    }
                    res.status(200).json(obj)
                }
            }
            catch(error){
                let err = {}
                for(let key in error.errors){
                    err[key] = error.errors[key].message             
                }
                res.send(
                    {
                        status:0,
                        message: "Category Error",
                        err,
                    }
                );
            }
    },
        
    view: async(req,res)=>{
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

        let data = await categoryModel.find(filter)
        let obj = {
            status: true,
            path:process.env.CATEGORYSTATICPATH,
            data,
            message: "Category found"
        }
        res.send(obj)
    },
            
}

module.exports = categoryController