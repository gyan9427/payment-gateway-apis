const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SettlementCollectionSchema = new Schema({
    settlementID:{
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

module.exports = mongoose.model('Setllementcollection',SettlementCollectionSchema);