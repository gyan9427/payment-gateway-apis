const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync(__dirname +'/ssl/privatekey.key','utf-8'),     // Path to the private key file
    cert: fs.readFileSync(__dirname +'/ssl/certificate.crt','utf-8'),   // Path to the SSL/TLS certificate file
  };


app.use(bodyParser.json());
const userRoutes = require("./routes/Users");
const gpayRoutes = require("./routes/Gpay")

app.use("/pga/v1.0",userRoutes);
app.use("/pga/v1.0/gpaymock",gpayRoutes);


https
    .createServer(options,app)
    .listen(3000,()=>{
        mongoose.connect('mongodb://localhost:27017/paymentgateway').then(()=>{
            console.log("connection established..")
        }).catch(err=>{
            console.log(err);
        })
        console.log("listening to 3000....")
    });