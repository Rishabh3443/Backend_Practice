const express = require("express");

const DbConnect = require("./config/Db")
const NotesRoutes = require("./routes/notes.routes");
const upload = require("./config/Multer")

const app = express()

app.use(express.json())

DbConnect()

app.use("/notes",NotesRoutes);

 app.post("/create",upload.single("file"),(req,res) =>{
  let file = req.file
  res.send({
    message : "okk",
    data: file
  });

  console.log(file); 
 })




module.exports = app;