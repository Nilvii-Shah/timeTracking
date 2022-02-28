const { status } = require("express/lib/response")
const mongoose = require("mongoose")

//schema
let taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    totalHours:{
        type:Number
    },
    utilizedHours:{
        type:Number
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    module:{
        type:mongoose.Schema.ObjectId,
        ref:"module"
    },
    status:{
        type:mongoose.Schema.ObjectId,
        ref:status
    }
})
let TaskModel = mongoose.model("task",taskSchema)
module.exports = TaskModel