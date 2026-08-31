const express = require("express");
const { createNotesController } = require("../../../backend_day3/src/controllers/notes.controller");

const router = express.Router()

router.post("/create",createNotesController)
module.exports = router;
