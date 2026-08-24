const mongoose = require("mongoose")

const Noteschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        minlength:10,
    }
});

const NotesModel = mongoose.model("notes",Noteschema);

module.exports = NotesModel;