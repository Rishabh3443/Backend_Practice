const { default: mongoose } = require("mongoose");




const notesSchema = new mongoose.Schema({
    title:String,
    description:{
        type:String,
        minlength:10,
        required:true,

    }
})


const NotesModel = mongoose.model("notes",notesSchema);

module.exports = NotesModel;