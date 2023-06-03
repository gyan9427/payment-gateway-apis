const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    transactionID: {
        type:String,
        required:true
    },
    amount: {
        type:Number,
        required:true,
        default: 0.00
    },
    currency:{
        type:String,
        required:true
    },
    payment_method:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Transaction',TransactionSchema);

