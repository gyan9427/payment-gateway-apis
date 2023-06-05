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
    type:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    last4digits:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
        required:true
    },
    countryCode:{
        type:String,
        required:true
    } 
},{timestamps:true})

module.exports = mongoose.model('Paymentinitialization',PaymentinitializationSchema);