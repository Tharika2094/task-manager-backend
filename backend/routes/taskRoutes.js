
const express=require("express")
const Task = require("../model/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controller/controller");
const router=express.Router();

//-----create a task-----
router.post("/",createTask)

//-----get all tasks from database
router.get("/",getTasks)
router.get("/:id",getTask)
router.delete("/:id",deleteTask)
router.put("/:id",updateTask)

module.exports=router;