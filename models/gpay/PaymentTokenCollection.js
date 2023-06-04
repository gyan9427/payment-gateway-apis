const mongoose = require("mongoose");

const PaymentTokenCollectionSchema = new mongoose.Schema({
    tokenId:{
        type:String,
        required:true
    },
    encryptedData: {
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('PaymentTokenCollection',PaymentTokenCollectionSchema);