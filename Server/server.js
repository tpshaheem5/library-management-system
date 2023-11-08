const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors =require('cors');
const morgan = require('morgan')

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())
app.use(morgan('dev')) 


mongoose.connect("mongodb://127.0.0.1:27017/LMSDB")
.then(() => {
    console.log("MongoDB connected");
})
.catch(() => {
    console.log("Failed to connect to MongoDB");
});
app.use(express.json())

const userRouter = require("./Routes/userRoutes");
app.use("/users", userRouter);


app.listen(5000, () => {
    console.log("Server started on port 5000");
});
