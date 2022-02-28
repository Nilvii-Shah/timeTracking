const mongoose = require("mongoose")


//schema

let statusSchema = new mongoose.Schema({
    statusname:{
        type:String,
        require:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }
})

//module

let statusModel = mongoose.model("status",statusSchema)
module.exports= statusModel