const testUserRoute = (req,res)=>{
    res.status(200).json({msg:"this is user route"})
}

module.exports = {
    testUserRoute
}