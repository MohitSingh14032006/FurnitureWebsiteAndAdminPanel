const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const userModel = require("../../Models/userModel");

let authController = {
    register: async (req,res)=>{
        let {name,email,password} = req.body;
        let checkEmail = await userModel.findOne({email})
        if(checkEmail){
            return res.send(
                {
                    status: 0,
                    msg: "Email ID Already exists ..."
                }
            )
        }
        else{
            //password encrypt -> database
            const hash = bcrypt.hashSync(password, saltRounds);
            let obj = {
                name,
                email,
                password : hash,
            }
            let userRes = await userModel.insertOne(obj)
            return res.send(
                {
                    status: 1,
                    msg: "User Created",
                    userRes
                }
            )
        }
    },

    login: async (req,res)=>{
        let {email,password} = req.body
        let userData = await userModel.findOne({email})

        if(userData){
            let dbPassword = userData.password  //hash password
            // console.log(dbPassword);
            if(bcrypt.compareSync(password, dbPassword)){
                //Login
                let token = jwt.sign({ id: userData._id }, process.env.TOKENKEY);
                res.send(
                    {
                        status: 1,
                        data: userData,
                        token
                    }
                )
            }
            else{
                res.send({
                    status: 0,
                    msg: "Invalid Password ..."
                })
            }
            
        }else{
            return res.send(
                {
                    status: 1,
                    msg: "Email ID not found ...",
                }
            )
        }
    },

    //After Login
    changePassword: async (req,res)=>{
        let {oldPassword, newPassword, confirmPassword} = req.body;
        
        try{
            let token = req.headers.authorization.split(" ")[1];  //string to array
            let {id} = jwt.verify(token, process.env.TOKENKEY);
            console.log(id);
            let userData = await userModel.findOne({_id:id})
            let dbPassword = userData.password
            // res.send("Hello")
            if(bcrypt.compareSync(oldPassword, dbPassword)){
                if(newPassword == confirmPassword){
                    const hash = bcrypt.hashSync(newPassword, saltRounds);
                    await userModel.updateOne(
                        {
                            _id: id
                        },
                        {
                            $set:{
                                password: hash,
                            },
                        },
                    );
                    res.send(
                        {
                           status: 1,
                           message: "Password Changed"
                        }
                    )
                }else{
                    res.send({
                        status: 0,
                        message: "New Password and Confirm Password not matched"
                    })
                }
            }
            else{
                res.send({
                    status: 0,
                    message: 'Incorrect old password'
                })
            }
        }
        catch(error){
            res.send({
                status: 0,
                message: "Please send correct token"
            })
        }
    },

    updateProfile: async(req,res) =>{
        let {phone, address, name} = req.body
    }
}

module.exports = authController