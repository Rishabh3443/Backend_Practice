const express = require("express");
const dbConnect = require("./config/db")
const NotesModel = require("./model/notesModel")
const NotesRoutes = require("./routes/notes.route")

const app = express();

app.use(express.json());

dbConnect();

app.use("/notes",NotesRoutes);


module.exports = app;