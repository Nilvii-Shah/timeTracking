const express = require("express")
const mongoose = require("mongoose")
const projet_teamcontroller = require("./controller/project_team_controller")
const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const ProjectController = require("./controller/ProjectController")
const status_controller = require("./controller/status-controller")
const project_module_controller = require("./controller/project-module-controller")
const task_controller = require("./controller/task-controller")
const usertaskController = require("./controller/user_task-controller")
const priorityController = require("./controller/priority-controller")

const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
// app.put("/users/",userController.updateUser )
app.post("/login",userController.login)


//project
app.post("/Project",ProjectController.addProject)
app.get("/Project",ProjectController.getAllProject)
app.put("/Project",ProjectController.updateProject)
app.delete("/Project/:ProjectId",ProjectController.deleteProject)
//project team
app.post("/Project_team",projet_teamcontroller.addteam)
app.get("/Project_team",projet_teamcontroller.getAllProjectTeam)
app.delete("/Project_team/:project_teamId",projet_teamcontroller.deleteProjectTeam)

//status
app.post("/status",status_controller.addstatus)
app.get("/status",status_controller.getAllstatus)
app.delete("/status/:statusId",status_controller.deletestatus)
app.put("/status",status_controller.updatestatus)

//module
app.post("/module",project_module_controller.addmodule)
app.get("/module",project_module_controller.getAllmodule)
app.delete("/module/:moduleId",project_module_controller.deletemodule)
app.put("/module",project_module_controller.updatemodule)

//task
app.post("/task",task_controller.addtask)
app.get("/task",task_controller.getAlltask)
app.delete("/task",task_controller.deletetask)
app.put("/task",task_controller.updatetask)
//user-task
app.post("/usertask",usertaskController.addUserTask)
app.get("/usertask",usertaskController.getAllUserTask)
app.delete("/usertask/:UserTaskId",usertaskController.deleteUserTask)
app.put("/usertask",usertaskController.updateUserTask)

//priority
app.post("/priority",priorityController.addPriority)
app.get("/priority",priorityController.getAllPriority)
app.put("/priority",priorityController.updatePriority)
app.delete("/priority/:PriorityId",priorityController.deletePriority)

mongoose.connect('mongodb://localhost:27017/ecom',function(err){
    if(err)
    {
      console.log("data is not connected");
    }
    else{
      console.log("data is connected");
    }
 }) 

//server
app.listen(3000,function(){
  console.log("server started on 3000");  
})