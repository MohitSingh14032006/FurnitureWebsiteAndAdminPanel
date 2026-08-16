const testimonialModel = require("../../Models/testimonialModel");

let testimonialController = {
    create: async(req,res)=>{
        let {name,designation,rating,order,message} = req.body;
        let insertObj = {
            name,
            designation,
            rating,
            order,
            message,
        }

        if(req.file){
            if(req.file.filename){
                insertObj['image'] = req.file.filename;
            }
        }

        try{
            let checkSameTestimonial = await testimonialModel.findOne({name})
            if(checkSameTestimonial){
                res.status(200).json(
                    {
                        status:0,
                        message: "Testimonial Error",
                        err:{
                            name: "Testimonial Name Already exists ..."
                        },
                    }
                )
            }
            else{
                let testimonialRes = await testimonialModel.insertOne(insertObj)
                 let obj = {
                    status: true,
                    message: "Testimonial added",
                    testimonialRes
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
                    message: "Testimonial Error",
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

        let data = await testimonialModel.find(filter)
        let obj = {
            status: true,
            path:process.env.TESTIMONIALSTATICPATH,
            data,
            message: "Testimonal found"
        }
        res.send(obj)
    }

}

module.exports = testimonialController
