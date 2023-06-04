const mongoose = require("mongoose");

const AuthorizationResponseSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true
    },
    authorizationStatus: {
        type: String,
        required: true
    },
    authorizationCode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("AuthorizationResponse",AuthorizationResponseSchema);