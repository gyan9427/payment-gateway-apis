const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());
const userRoutes = require("./routes/Users");

app.use("/pga/v1.0",userRoutes);

app.listen(3000,()=>{
    mongoose.connect('mongodb://localhost:27017/paymentgateway').then(()=>{
        console.log("connection established..")
    }).catch(err=>{
        console.log(err);
    })
    console.log("listening to 3000....")
})