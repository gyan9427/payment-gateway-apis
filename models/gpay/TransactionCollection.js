const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required:true
    },
    transactionAmount:{
        type: Number,
        required: true,
        default: 0.00
    },
        paymentMethod: {
            type: String,
            required: true
        }
})

module.exports = mongoose.model("Transaction",TransactionSchema);