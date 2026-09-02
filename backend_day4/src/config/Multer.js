const multer = require("multer");
const path = require("path");



// const storage = multer.diskStorage({

//   destination: (req, file, cb) => {
//     console.log("🔥 DISK STORAGE RUNNING");
//     const dest = path.join(__dirname, "..", "uploads"); // folder must already exist
//     cb(null, dest);
//   },

//   filename: (req, file, cb) => {
//     console.log("🔥 FILENAME RUNNING");
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });


const memorystorage = multer.memoryStorage()
const upload = multer();

module.exports = upload;