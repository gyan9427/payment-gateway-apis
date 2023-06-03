const mongoose = require("mongoose");

const RefundCollectionSchema = new mongoose.Schema({
    refundID:{
        type:String,
        required:true,
    }, 
    amount:{
        type:Number,
        required:true,
        default:0.00
    }, 
    status:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model('Refundcollection',RefundCollectionSchema)