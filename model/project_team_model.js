const mongoose = require("mongoose")
const Project_teamSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }
})

const Project_TeamModel = mongoose.model("project_team",Project_teamSchema)
module.exports = Project_TeamModel