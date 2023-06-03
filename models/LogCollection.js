const mongoose = require("mongoose");

const LogCollectionSchema = new mongoose.Schema({
    time_stamp:{
        type:String,
        required:true,
    }, 
    transaction_type:{
        type:String,
        required:true
    }, 
    status:{
        type:String,
        required:true
    },
},{timestamps:true});


module.exports = mongoose.model('Logcollection',LogCollectionSchema);