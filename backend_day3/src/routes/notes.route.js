const express = require("express");

const router = express.Router();
const createNotesController = require("../controllers/notes.controller")



router.post("/create",createNotesController);

module.exports = router;