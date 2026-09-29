import express from "express";
import cors from "cors";
import mongoose from "mongoose";

app.use(cors());

const app = express();

app.get("/", (req, res) => {
res.send("Hello from my server!");
});

app.listen(5000, () => {
console.log("Server running on port 5000");
});

app.get("/api/message", (req, res) => {
res.json ({
          message: "Hello from Express!"
    }); 
});

mongoose.connect("mongodb://localhost:27017/")
.then (() => {
    console.log("MongoDB Connected")
})

.catch (error => {
    console.log(error)
})