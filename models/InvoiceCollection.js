const mongoose = require("mongoose");

const InvoiceCollectionSchema =new mongoose.Schema({
    invoiceID:{
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

module.exports = mongoose.model('Invoicecollection',InvoiceCollectionSchema);