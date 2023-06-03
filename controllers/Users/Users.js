const User = require("../../models/Users")

exports.testUserRoute = (req,res)=>{
    res.status(200).json({msg:"this is user route"})
}

exports.createUser = (req,res)=>{
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

exports.login = (req,res)=>{
    const {id,password} = req.body;

    if(id,password){
        User.findById()
        let user = User.findOne({email:id}).then(user=>{
           if(!user){
                res.status(400).json({msg:"User not available"})
           }else{
                if(user.password === password) res.status(200).json({msg:"login successful",user:user})
                else res.status(402).json({msg:"wrong password"})
            }
        })
    }
    else{
        res.status(500).json({msg:"Something went wrong"})
    }

}

