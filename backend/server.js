const dotenv=require("dotenv").config();
const express=require("express");
const cors=require("cors")
const connectDB=require("./config/connectDB");
const mongoose=require("mongoose");
const Task=require("./model/taskModel");
const router=require("./routes/taskRoutes");



//create a express app, this app is our server.....
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors({
    origin:["http://localhost:3000","https://mern-task-app-glom.onrender.com"]
}));
app.use("/api/tasks",router);

//----create home page route-----

app.get("/",(req,res)=>{
    res.send("Home page...");
})

const PORT=process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server running on ${PORT}`);  
        });
    })
    .catch((error)=>console.log(error));





