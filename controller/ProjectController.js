const { status } = require("express/lib/response")
const ProjectModel = require("../model/ProjectModel")

//add
module.exports.addProject = function(req,res){
    let ProjectName = req.body.ProjectName
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let description = req.body.description
    let estimatedHours = req.body.estimatedHours
    let technology = req.body.technology

    let Project = new ProjectModel({
        ProjectName : ProjectName,
        startDate:startDate,
        endDate:endDate,
        description : description,
        estimatedHours: estimatedHours,
        technology: technology
    })

    Project.save(function(err,data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "project submitted", data: data, status: 200 })//http status code 
        }
    })

}
//list
module.exports.getAllProject = function(req,res) {
    ProjectModel.find().populate("project").exec(function(err,data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "project ret...", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deleteProject = function(req,res) {
    let ProjectId = req.params.ProjectId
    
    ProjectModel.deleteOne({_id:ProjectId}, function(err,data) {
        if(err){
            res.json({msg:"Something went wrong", data:err, status:-1})
        } else{
            res.json({ msg:"project removed...", data: data, status:200})
        }
    })
}

//update
module.exports.updateProject = function(req,res){
    let ProjectName = req.body.ProjectName
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let estimatedHours =  req.body.estimatedHours
    let technology = req.body.technology
    let ProjectId = req.body.ProjectId

    ProjectModel.updateOne({_id:ProjectId}, {ProjectName : ProjectName, startDate:startDate,endDate:endDate,estimatedHours: estimatedHours,technology:technology},function(err,data){
        if(err){
            res.json({msg:"Something went wrong", data:err, status:-1})
        } else{
            res.json({msg:"modified...", data:data,status:200})
        }
    })
}


