const mongoose = require("mongoose");

const ErrorResponseSchema = new mongoose.Schema({
    errorCode: {
        type: String,
        required: true
    },
    errorMessage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ErrorResponse",ErrorResponseSchema);