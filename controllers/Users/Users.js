const User = require("../../models/Users")

const testUserRoute = (req,res)=>{
    res.status(200).json({msg:"this is user route"})
}

const createUser = (req,res)=>{
    const {name,email,password} = req.body;
    
    if(name && email && password){
        const user = new User({
            name:name,
            email:email,
            password:password
        });

        user.save().then(resp=>{
            res.status(200).json({
                msg:"User created successfully...",
                response: resp
            })
        }).catch(error=>{
            if(!error.status){
                res.status(500).json({
                    msg:"something went wrong, try again later..",
                })
            }
            else{
                res.status(error.status).json({
                    msg:error
                })
            }
        })
    }
    
}

module.exports = {
    testUserRoute,
    createUser
}