const mongoose = require("mongoose")

//schema
const ProjectSchema = new mongoose.Schema({
    
    ProjectName:{
        type: String,
        require: true
    },
    description:{
        type: String,
        
    },
    startDate:{
        type: String,
        require: true
    },
    endDate:{
        type: String,
        require: true
    },
    estimatedHours:{
        type: Number
    },
    technology:{
        type: String,
        
    }

})

//model
const ProjectModel = mongoose.model("Project",ProjectSchema)
module.exports = ProjectModel
