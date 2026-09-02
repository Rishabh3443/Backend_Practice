const { default: mongoose } = require("mongoose");

const notesSchema = mongoose.Schema({
    Caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    }
}
)


const notesModel = mongoose.model("notes",notesSchema);

module.exports = notesModel;