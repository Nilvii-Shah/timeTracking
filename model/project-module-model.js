const mongoose = require("mongoose")

//schema
let project_moduleSchema = new mongoose.Schema({
    modulename:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId
    },
    estimatedHours:{
        type:Number
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    utilizedHours:{
        type:Number
    }
})

//module
let moduleModel = mongoose.model("module",project_moduleSchema)
module.exports = moduleModel