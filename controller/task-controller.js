const { request } = require("express")
const req = require("express/lib/request")
const TaskModel = require("../model/task-model")
const taskSchema = require("../model/task-model")

module.exports.addtask = function(req,res){
    let taskName = req.body.taskName
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let description = req.body.description
    let totalHours = req.body.totalHours
    let utilizedHours = req.body.utilizedHours
    let project = req.body.project
    let module = req.body.module
    let status = req.body.status

    let task = new taskSchema({
        taskName:taskName,
        startDate:startDate,
        endDate:endDate,
        description:description,
        totalHours:totalHours,
        utilizedHours:utilizedHours,
        project:project,
        module:module,
        status:status
    })

    task.save(function(err,success){
        if(err){
            res.json({
                msg:"somehting went wrong",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"task added",
                status:200,
                data:success
            })
        }
    })
}
module.exports.getAlltask = function(req,res){
    TaskModel.find({project:req.query.projectid}).populate("project").populate("module").populate("status").exec(function(err,success){
        if(err){
            res.json({
                msg:"somehting went wrong",
                status:-1,
                data: err
            })
        }else{
            res.json({
                msg:"task retrieved",
                status:200,
                data: success
            })
        }
    })
}
module.exports.updatetask = function(req,res){
    let taskid = req.body.taskid
    let taskName =  req.body.taskName
    let project = req.body.project
    let endDate = req.body.endDate
    let startDate = req.body.startDate
    let totalHours = req.body.totalHours
    let estimatedHours = req.body.estimatedHours
    let description = req.body.description
    let module = req.body.module
    let status = req.body.status

    TaskModel.updateOne({_id:taskid},{taskName:taskName, project:project,endDate:endDate,startDate:startDate,totalHours:totalHours,estimatedHours:estimatedHours, module:module,status,status, description:description},function(err,data){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
        } else{
            res.json({
                msg:"updated",
                status:200,
                data:req.body
            })
        }
    })
}

module.exports.deletetask = function(req,res){
    let taskid = req.query.taskid
    TaskModel.deleteOne({"_id":taskid},function(err,success){
        if(err){
            res.json({
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"task deleted",
                status:200,
                data:success
            })
        }
    })
}
