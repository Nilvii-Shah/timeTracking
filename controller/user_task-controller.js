const User_taskModel = require("../model/user_task-model")
const User_taskSchema = require("../model/user_task-model")

module.exports.addUserTask = function(req,res){
    let user = req.body.user
    let task = req.body.task

    let uesrtask = new User_taskSchema({
        user:user,
        task:task
    })

    uesrtask.save(function(err,success){
        if(err)
        {
            res.json({
              msg:"Something went wrong",
              status:-1,
              data:err
        })
        }
        else
        {
            res.json({
                msg:"UserTask added successfully",
                status:200,
                data:success
            })
        }
    })
}

module.exports.getAllUserTask = function(req,res){
    User_taskModel.find().populate("user").populate("task").exec(function(err,success){
        if(err)
        {
            res.json({
                mgs:"Something went wrong",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                msg:"User Tasks retrieved",
                status:200,
                data:success
            })
        }
    })
 }


 module.exports.deleteUserTask = function(req,res){
    let UserTaskId = req.params.UserTaskId

    User_taskModel.deleteOne({"_id":UserTaskId},function(err,success){
        if(err)
        {
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                msg:"User Task removed..",
                status:200,
                data:success
            })
        }
    })
}

module.exports.updateUserTask = function(req,res){
    let UserTaskId = req.body.UserTaskId
    let user = req.body.user
    let task = req.body.task
    
    
    User_taskModel.updateOne({_id:UserTaskId},{user:user,task:task},function(err,success){
        if(err)
        {
            res.json({
                msg:"Something went wrong",
                status:-1,
                data:err
            })
        }
        else{
            res.json({
                msg:"Update successfully",
                status:200,
                data:success
            })
        } 
    })

}