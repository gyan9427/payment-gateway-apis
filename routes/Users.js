const express = require("express");
const router = express.Router();
const {testUserRoute,createUser} = require("../controllers/Users/Users")

router.get('/users',testUserRoute).post('/user/register',createUser);

module.exports = router;