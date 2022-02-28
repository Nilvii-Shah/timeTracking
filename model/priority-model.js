const mongoose = require("mongoose")

let PrioritySchema = new mongoose.Schema({
    priorityName:{
       type: String,
       require:true
    }
})

let PriorityModel = mongoose.model("priority",PrioritySchema)
module.exports = PriorityModel