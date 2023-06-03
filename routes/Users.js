const express = require("express");
const router = express.Router();

router.get('/users',(req,res)=>{
    res.status(200).json({msg:"this is user route"})
})

module.exports = router;