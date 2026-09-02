const express = require("express");
const { createPostController } = require("../../../backend_day3/src/controllers/notes.controller");

const router = express.Router()



router.post("/createPost",createPostController);

module.exports = router;
