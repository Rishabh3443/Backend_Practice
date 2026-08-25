const express = require("express");
const dbConnect = require("./config/db")
const NotesModel = require("./model/notesModel")

const app = express();

dbConnect();



module.exports = app;