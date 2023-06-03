const express = require("express");
const router = express.Router();
const {testUserRoute} = require("../controllers/Users/Users")

router.get('/users',testUserRoute)

module.exports = router;