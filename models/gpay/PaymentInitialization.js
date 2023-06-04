const mongoose = require("mongoose");

const PaymentinitializationSchema =new mongoose.Schema({
    transactionAmount:{
        type:Number,
        default:0.00,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Paymentinitialization',PaymentinitializationSchema);