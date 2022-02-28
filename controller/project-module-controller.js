const moduleModel = require("../model/project-module-model")
const project_moduleSchema = require("../model/project-module-model")

module.exports.addmodule = function(req,res){
    let modulename = req.body.modulename
    let estimatedHours = req.body.estimatedHours
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let utilizedHours = req.body.estimatedHours
    let project = req.body.project

    let module = new project_moduleSchema({
        modulename:modulename,
        estimatedHours : estimatedHours,
        startDate : startDate,
        endDate : endDate,
        utilizedHours : utilizedHours,
        project: project
    })

    module.save(function(err,success){
        if(err){
            res.json({
                msg : "something went wrong",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"status added",
                status:200,
                data:success
            })
        }
    })
}
module.exports.getAllmodule = function(req,res){
    moduleModel.find({project:req.query.projectId}).populate("project").exec(function(err,success){
        if(err){
            res.json({
                msg:"data not found",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data retrived",
                status:200,
                data:req.body
            })
        }
    })
}

module.exports.updatemodule = function(req,res){
    let moduleId = req.body.moduleId
    let modulename =  req.body.modulename
    let project = req.body.project
    let endDate = req.body.endDate
    let startDate = req.body.startDate
    let estimatedHours = req.body.estimatedHours
    let utilizedHours = req.body.utilizedHours

    moduleModel.updateOne({_id:moduleId},{modulename:modulename, project:project,endDate:endDate,startDate:startDate,estimatedHours:estimatedHours,utilizedHours:utilizedHours},function(err,data){
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

module.exports.deletemodule = function(req,res){
    let moduleId = req.params.moduleId
    moduleModel.deleteOne({moduleId:moduleId},function(err,data){
        if(err){
            res.json({
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data deleted",
                status:200,
                data:data
            })
        }
    })
}