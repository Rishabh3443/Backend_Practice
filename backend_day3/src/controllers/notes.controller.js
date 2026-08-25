const NotesModel = require("../model/notesModel");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNotes = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: " your notes created successfully",
      data: newNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.status(201).json({
      message: "all notes are here👇🏻👇🏻",
      data: allNotes,
    });
  } catch (error) {
    res.status(500).json({
      error: "error.message",
    });
  };
};
  const getSingleNotesController = async (req, res) => {
    try {
      let noteid = req.params.id;
      let singleNotes = await NotesModel.findById(noteid);
      res.status(201).json({
        message: "here is your single note",
        data: singleNotes,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };

  const updatenotesController = async(req,res)=>{
    try {
         let noteId = req.params.id;
         let body = req.body;
     let updatedNotes = await NotesModel.findByIdAndUpdate(noteId,body,{new:true});
     res.status(201).json({
        message:"here is your updated notes",
        data:updatedNotes
     })
    } catch (error) {
         res.status(500).json({
        error: error.message,
      });
    }
  };

  const deleteNotesController = async (req,res)=>{
   try {
    let notesid = req.params.id;
   let deletedNotes = await NotesModel.findByIdAndDelete(notesid);
   res.status(201).json({
    message: "your notes deleted successfully"
   })

   } catch (error) {
    res.status(500).json({
        error: error.message,
      });
   }
  }

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updatenotesController,
  deleteNotesController
};
