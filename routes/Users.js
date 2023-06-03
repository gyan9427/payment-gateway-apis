const express = require("express");
const router = express.Router();
const {testUserRoute,createUser, login} = require("../controllers/Users/Users")

router.get('/users',testUserRoute).post('/user/register',createUser).post('/user/login',login);

module.exports = router;