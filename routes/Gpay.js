const express = require("express");
const router = express.Router();
const {setPaymentDetails,getPaymentDetails} = require("../controllers/Gpay/Gpay")

router.post('/paymentdetails',setPaymentDetails).post('/transaction',getPaymentDetails);

module.exports = router;
