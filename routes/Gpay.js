const express = require("express");
const router = express.Router();
const {setPaymentDetails} = require("../controllers/Gpay/Gpay")

router.post('/paymentdetails',setPaymentDetails);

module.exports = router;
