const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BankCollectionSchema = new Schema({
    bank_name:{
        type:String,
        required:true
    }, 
    IFSC_code:{
        type:String,
        required:true,
        minLength:11
    }
},{timestamps:true})

module.exports = mongoose.model('Bank',BankCollectionSchema);