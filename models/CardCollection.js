const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardCollectionSchema = new Schema({
    cardholder_name:{
        type:String,
        required:true,
        minLength:5,
    }, 
    card_number:{
        type:String,
        required:true,
        minLength: 16
    }, 
    expiration_date:{
        type:Date,
        required:true
    }, 
    CVV_code :{
        type:Number,
        required:true,
        minLength:3
    } 
})

module.exports = mongoose.model('Cardcollection',CardCollectionSchema);