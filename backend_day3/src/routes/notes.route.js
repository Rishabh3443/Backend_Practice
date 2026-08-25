const express = require("express");

const router = express.Router();
const {
  createNotesController,
  getAllNotesController,
 getSingleNotesController,
 updatenotesController,
 deleteNotesController
} = require("../controllers/notes.controller");


router.post("/create", createNotesController);


router.get("/allnotes", getAllNotesController);


router.get("/:id",getSingleNotesController);

router.put("/:id",updatenotesController);

router.delete("/:id",deleteNotesController);
module.exports = router;
