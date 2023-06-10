const express = require("express");
const router = express.Router();
const {setPaymentDetails,getPaymentDetails,createUsers} = require("../controllers/Gpay/Gpay")

router.post('/paymentdetails',setPaymentDetails)
      .post('/transaction',getPaymentDetails)
      .post('/createUsers',createUsers);

module.exports = router;
