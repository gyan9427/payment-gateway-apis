const express = require("express");
const app = express();

const userRoutes = require("./routes/Users");

app.use("/pga/v1.0",userRoutes);

app.listen(3000,()=>{
    console.log("listening to 3000....")
})