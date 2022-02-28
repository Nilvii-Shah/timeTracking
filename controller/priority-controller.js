const PriorityModel = require("../model/priority-model")
const PrioritySchema = require("../model/priority-model")


module.exports.addPriority = function(req,res){

     let priorityName = req.body.priorityName


     let priority = new PrioritySchema({
         priorityName: priorityName
     })

     priority.save(function(err,success){
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
                 msg:"Priority added successfully",
                 status:200,
                 data:success
             })
         }

     })

}

module.exports.getAllPriority = function(req,res){
   PriorityModel.find(function(err,success){
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
               msg:"Priority retrieved",
               status:200,
               data:success
           })
       }
   })
}

module.exports.deletePriority = function(req,res){
    let PriorityId = req.params.PriorityId

    PriorityModel.deleteOne({"_id":PriorityId},function(err,success){
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
                msg:"Priority removed..",
                status:200,
                data:success
            })
        }
    })
}

module.exports.updatePriority = function(req,res){
    let PriorityId = req.body.PriorityId
    let priorityName = req.body.priorityName
    
    
    
    PriorityModel.updateOne({_id:PriorityId},{priorityName:priorityName},function(err,success){
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