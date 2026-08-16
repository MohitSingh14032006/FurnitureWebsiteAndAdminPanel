const sliderModel = require("../../Models/sliderModel");

let sliderController = {
    create : async(req,res) =>{
            // console.log(req.body);
            // console.log(req.file);

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
                let checkSameSlider = await sliderModel.findOne({name})

                if(checkSameSlider){
                    res.status(200).json(
                        {
                            status:0,
                            message: "Slider Error",
                            err:{
                                name: "Slider Name Already exists ..."
                            },
                        }
                    )
                }
                else{
                    let sliderRes = await sliderModel.insertOne(insertObj)

                     let obj = {
                        status: true,
                        message: "Slider added",
                        sliderRes
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
                        message: "Slider Error",
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

        let data = await sliderModel.find(filter)
        let obj = {
            status: true,
            path:process.env.SLIDERSTATICPATH,
            data,
            message: "Slider found"
        }
        res.send(obj)
    },
            
}

module.exports = sliderController