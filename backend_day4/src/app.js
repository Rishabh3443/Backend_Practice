const express = require("express");

const DbConnect = require("./config/Db")
const NotesRoutes = require("./routes/notes.routes");

const app = express()

DbConnect()

app.use("/notes",NotesRoutes);



app.get("/",(req,res)=>{
    res.send("iam running")
})

module.exports = app;