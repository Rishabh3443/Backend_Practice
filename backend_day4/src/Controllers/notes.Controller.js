const notesModel = require("../models/notes.model")

const createNotesController = async(req,res)=>{
  let {title,description} = req.body;
  let data = await notesModel.create({
    title,
    description,
  })

};