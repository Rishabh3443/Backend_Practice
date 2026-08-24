const express = require("express");
const  connectDb = require("./config/db");
const NotesModel = require("./models/notemodel");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("chalu hai system");
})

app.post("/create",async(req,res)=>{

    let {title,description} = req.body;

    const NewNote = await NotesModel.create({
        title,
        description,
    });

    res.send({
        success:true,
        message:"your notes submited succesfully",
        data: NewNote,
    })
})








module.exports = app;