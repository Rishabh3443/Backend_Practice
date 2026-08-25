const NotesModel = require("../model/notesModel")

const createNotesController = async (req,res)=>{
    try {
        
        let {title,description,} = req.body;

    let newNotes = await NotesModel.create({
        title,
        description,
    })

    return res.status(201).json({
        message:" your notes created successfully",
        data: newNotes,
    })
    } catch (error) {
      return  res.status(500).json({
            message:error.message,
        })
    }
};

module.exports = createNotesController
